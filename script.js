document.addEventListener("DOMContentLoaded", () => {
    // Data makanan dimuat dari file data.js

    // --- ELEMENT SELECTORS ---
    const foodCatalog = document.getElementById("food-catalog");
    const searchInput = document.getElementById("search-input");
    const regionFilter = document.getElementById("region-filter");
    const favoritesList = document.getElementById("favorites-list");
    const modal = document.getElementById("food-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalCook = document.getElementById("modal-cook");
    const modalHistory = document.getElementById("modal-history");
    const modalImage = document.getElementById("modal-image");
    const closeBtn = modal.querySelector(".close-btn");
    const commentBtn = document.getElementById("comment-btn");
    const modalFavBtn = document.querySelector(".modal-fav-btn");
    const modalLikeBtn = document.querySelector(".modal-like-btn");
    const modalDislikeBtn = document.querySelector(".modal-dislike-btn");
    const modalLikeCount = document.querySelector(".modal-like-count");
    const modalDislikeCount = document.querySelector(".modal-dislike-count");
    const commentModal = document.getElementById("comment-modal");
    const commentModalTitle = document.getElementById("comment-modal-title");
    const closeCommentModal = document.getElementById("close-comment-modal");
    const commentsList = document.getElementById("comments-list");
    const submitCommentBtn = document.getElementById("submit-comment");
    const commentNameInput = document.getElementById("comment-name");
    const commentTextInput = document.getElementById("comment-text");
    const loginModal = document.getElementById("login-modal");
    const closeLoginModal = document.getElementById("close-login-modal");
    const loginSubmit = document.getElementById("login-submit");
    const loginNameInput = document.getElementById("login-name");
    const loginPasswordInput = document.getElementById("login-password");
    const loginButton = document.getElementById("login-button");
    const logoutButton = document.getElementById("logout-button");
    const userGreeting = document.getElementById("user-greeting");
    const usernameDisplay = document.getElementById("username-display");
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileNav = document.getElementById("mobile-nav");
    const mobileLoginBtn = document.getElementById("mobile-login-btn");
    const scrollTopBtn = document.getElementById("scroll-top-btn");

    // --- STATE & STORAGE ---
    const commentsStorage = {};
    const reactionsStorage = {};
    let isLoggedIn = false;
    let loggedUser = "";
    let currentFoodId = "";

    // --- FUNGSI BARU UNTUK HAMBURGER & SCROLL ---
    hamburgerBtn.addEventListener("click", () => {
        hamburgerBtn.classList.toggle("active");
        mobileNav.classList.toggle("active");
    });

    mobileNav.addEventListener("click", (e) => {
        if (e.target.classList.contains("mobile-link") || e.target.id === "mobile-login-btn") {
            hamburgerBtn.classList.remove("active");
            mobileNav.classList.remove("active");
        }
    });

    mobileLoginBtn.addEventListener("click", () => {
        loginModal.style.display = 'block';
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("visible");
        } else {
            scrollTopBtn.classList.remove("visible");
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- FUNGSI RENDER & FILTER ---
    const renderFoodCards = (dataToRender) => {
        foodCatalog.innerHTML = "";
        dataToRender.forEach(food => {
            if (!reactionsStorage[food.id]) reactionsStorage[food.id] = { likes: 0, dislikes: 0 };
            const card = document.createElement("article");
            card.className = "food-card";
            card.setAttribute('data-id', food.id);

            // ▼▼▼ PERUBAHAN DI SINI: Menambahkan deskripsi ke dalam kartu ▼▼▼
            card.innerHTML = `
                <img src="${food.image}" alt="${food.title}" class="food-img">
                <div class="card-content">
                    <h3>${food.title}</h3>
                    <p class="origin">${food.origin}</p>
                    <p class="card-description">${food.description}</p> 
                    <div class="card-actions">
                        <button class="action-btn favorite-btn" title="Simpan ke Favorit">⭐</button>
                        <button class="action-btn like-btn">👍 <span class="like-count">${reactionsStorage[food.id].likes}</span></button>
                        <button class="action-btn dislike-btn">👎 <span class="dislike-count">${reactionsStorage[food.id].dislikes}</span></button>
                        <button class="action-btn comment-card-btn" title="Beri Komentar">💬</button> 
                    </div>
                </div>
            `;
            foodCatalog.appendChild(card);
        });
        addEventListenersToCards();
    };

    const filterFoods = () => {
        const searchText = searchInput.value.toLowerCase();
        const selectedRegion = regionFilter.value.toLowerCase();
        const filteredData = foodData.filter(food => {
            const matchesSearch = food.title.toLowerCase().includes(searchText);
            const matchesRegion = selectedRegion === "all" || food.origin.toLowerCase().replace(/\s+/g, '') === selectedRegion.replace(/\s+/g, '');
            return matchesSearch && matchesRegion;
        });
        renderFoodCards(filteredData);
    };

    // ... (Sisa fungsi JavaScript Anda tetap sama persis)
    const addEventListenersToCards = () => {
        document.querySelectorAll(".food-card").forEach(card => {
            const id = card.dataset.id;
            const food = foodData.find(f => f.id === id);
            // Membuat seluruh kartu bisa diklik, kecuali tombol aksi
            card.addEventListener("click", (e) => {
                if (!e.target.closest('.card-actions')) {
                    openRecipeModal(id);
                }
            });
            card.querySelector(".favorite-btn").addEventListener("click", (e) => {
                e.stopPropagation();
                if (!isLoggedIn) return loginModal.style.display = 'block';
                addFavorite(food.title, food.image, food.id);
            });
            card.querySelector(".like-btn").addEventListener("click", (e) => {
                e.stopPropagation();
                if (!isLoggedIn) return loginModal.style.display = 'block';
                reactionsStorage[id].likes++;
                updateReactions(id);
            });
            card.querySelector(".dislike-btn").addEventListener("click", (e) => {
                e.stopPropagation();
                if (!isLoggedIn) return loginModal.style.display = 'block';
                reactionsStorage[id].dislikes++;
                updateReactions(id);
            });
            card.querySelector(".comment-card-btn").addEventListener("click", (e) => {
                e.stopPropagation();
                if (!isLoggedIn) return loginModal.style.display = 'block';
                currentFoodId = id;
                commentModal.style.display = "block";
                commentModalTitle.innerText = `Komentar untuk: ${food.title}`;
                commentNameInput.value = loggedUser;
                commentNameInput.readOnly = true;
                displayComments(id);
            });
        });
    };
    const openRecipeModal = (id) => {
        const food = foodData.find(f => f.id === id);
        if (!food) return;
        currentFoodId = id;
        modal.classList.remove("hide");
        modal.classList.add("show");
        modal.style.display = "flex";
        disableBodyScroll();
        modalTitle.innerText = food.title;
        modalDesc.innerText = food.description;
        modalCook.innerHTML = food.cookingSteps;
        modalHistory.innerText = food.history;
        modalImage.src = food.image;
        modalImage.alt = food.title;
        updateReactions(id);
    };
    const updateReactions = (id) => {
        const reactions = reactionsStorage[id] || { likes: 0, dislikes: 0 };
        document.querySelectorAll(".food-card").forEach(card => {
            if (card.dataset.id === id) {
                card.querySelector(".like-count").innerText = reactions.likes;
                card.querySelector(".dislike-count").innerText = reactions.dislikes;
            }
        });
        if (currentFoodId === id) {
            modalLikeCount.innerText = reactions.likes;
            modalDislikeCount.innerText = reactions.dislikes;
        }
    };
    const disableBodyScroll = () => document.body.classList.add("modal-open");
    const enableBodyScroll = () => document.body.classList.remove("modal-open");
    const addFavorite = (foodName, imgSrc, foodId) => {
        if (favoritesList.querySelector(`[data-id="${foodId}"]`)) return alert(`${foodName} sudah ada di favorit.`);
        const emptyMsg = favoritesList.querySelector(".empty-fav");
        if (emptyMsg) emptyMsg.remove();
        const favItem = document.createElement("div");
        favItem.className = 'fav-item';
        favItem.setAttribute("data-id", foodId);
        favItem.innerHTML = `<img src="${imgSrc}" alt="${foodName}"><span>${foodName}</span><button class="remove-fav-btn">Hapus</button>`;
        favItem.addEventListener("click", (e) => {
            if (!e.target.classList.contains("remove-fav-btn")) openRecipeModal(foodId);
        });
        favItem.querySelector('.remove-fav-btn').onclick = (e) => {
            e.stopPropagation();
            favItem.remove();
            if (favoritesList.children.length === 0) {
                 favoritesList.innerHTML = '<p class="empty-fav">Belum ada makanan favorit yang disimpan.</p>';
            }
        };
        favoritesList.appendChild(favItem);
        alert(`${foodName} ditambahkan ke favorit!`);
    };
    const displayComments = (id) => {
        const comments = commentsStorage[id] || [];
        commentsList.innerHTML = "";
        if (comments.length === 0) {
            commentsList.innerHTML = '<div class="no-comments">Belum ada komentar untuk resep ini.</div>';
            return;
        }
        comments.forEach(comment => {
            const commentElement = document.createElement("div");
            commentElement.className = "comment-item";
            commentElement.innerHTML = `<div class="comment-author">${comment.name}</div><div class="comment-date">${comment.date}</div><div class="comment-text">${comment.text}</div>`;
            commentsList.appendChild(commentElement);
        });
    };
    const closeAllModals = () => {
        if (modal.style.display === "flex") {
            modal.classList.remove("show");
            modal.classList.add("hide");
            setTimeout(() => { modal.style.display = "none"; enableBodyScroll(); }, 400);
        }
        commentModal.style.display = "none";
        loginModal.style.display = "none";
    };
    modalFavBtn.addEventListener("click", () => {
        if (!isLoggedIn) return loginModal.style.display = 'block';
        const food = foodData.find(f => f.id === currentFoodId);
        addFavorite(food.title, food.image, food.id);
    });
    modalLikeBtn.addEventListener("click", () => { if (!isLoggedIn) return loginModal.style.display = 'block'; reactionsStorage[currentFoodId].likes++; updateReactions(currentFoodId); });
    modalDislikeBtn.addEventListener("click", () => { if (!isLoggedIn) return loginModal.style.display = 'block'; reactionsStorage[currentFoodId].dislikes++; updateReactions(currentFoodId); });
    commentBtn.addEventListener("click", () => {
        if (!isLoggedIn) return loginModal.style.display = 'block';
        const food = foodData.find(f => f.id === currentFoodId);
        commentModal.style.display = "block";
        commentModalTitle.innerText = `Komentar untuk: ${food.title}`;
        commentNameInput.value = loggedUser;
        commentNameInput.readOnly = true;
        displayComments(currentFoodId);
    });
    submitCommentBtn.addEventListener("click", () => {
        const text = commentTextInput.value.trim();
        if (!text) return alert("Mohon isi komentar!");
        const comment = { name: loggedUser, text, date: new Date().toLocaleString("id-ID", { dateStyle: 'long', timeStyle: 'short' }) };
        if (!commentsStorage[currentFoodId]) commentsStorage[currentFoodId] = [];
        commentsStorage[currentFoodId].push(comment);
        commentTextInput.value = "";
        displayComments(currentFoodId);
        alert("Komentar berhasil ditambahkan!");
    });
    closeBtn.addEventListener("click", closeAllModals);
    closeCommentModal.addEventListener("click", () => commentModal.style.display = 'none');
    closeLoginModal.addEventListener("click", () => loginModal.style.display = 'none');
    window.addEventListener("click", (e) => { if (e.target === modal || e.target === commentModal || e.target === loginModal) closeAllModals(); });
    window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAllModals(); });
    const updateLoginUI = () => {
        if (isLoggedIn) {
            usernameDisplay.innerText = loggedUser;
            userGreeting.classList.remove("hidden");
            loginButton.classList.add("hidden");
            mobileLoginBtn.innerText = 'Logout';
            mobileLoginBtn.onclick = () => { 
                logoutButton.click(); 
            };
        } else {
            userGreeting.classList.add("hidden");
            loginButton.classList.remove("hidden");
            mobileLoginBtn.innerText = 'Login';
            mobileLoginBtn.onclick = () => { loginModal.style.display = 'block'; };
            favoritesList.innerHTML = '<p class="empty-fav">Belum ada makanan favorit yang disimpan.</p>';
        }
    };
    loginButton.addEventListener("click", () => loginModal.style.display = 'block');
    logoutButton.addEventListener("click", () => {
        isLoggedIn = false;
        loggedUser = "";
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('loggedUser');
        updateLoginUI();
        alert("Anda telah logout.");
    });
    loginSubmit.addEventListener("click", () => {
        const name = loginNameInput.value.trim();
        const pass = loginPasswordInput.value.trim();
        if (!name || !pass) return alert("Mohon isi nama dan password!");
        isLoggedIn = true;
        loggedUser = name;
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('loggedUser', name);
        updateLoginUI();
        loginNameInput.value = '';
        loginPasswordInput.value = '';
        loginModal.style.display = "none";
        alert(`Selamat datang, ${name}!`);
    });
    const checkLoginStatus = () => {
        const storedIsLoggedIn = sessionStorage.getItem('isLoggedIn');
        const storedLoggedUser = sessionStorage.getItem('loggedUser');
        if (storedIsLoggedIn === 'true' && storedLoggedUser) {
            isLoggedIn = true;
            loggedUser = storedLoggedUser;
            updateLoginUI();
        }
    };
    searchInput.addEventListener("input", filterFoods);
    regionFilter.addEventListener("change", filterFoods);
    renderFoodCards(foodData);
    checkLoginStatus();
});