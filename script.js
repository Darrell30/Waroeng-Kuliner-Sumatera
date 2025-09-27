document.addEventListener("DOMContentLoaded", () => {
    // --- ELEMENT SELECTORS ---
    const favoritesList = document.getElementById("favorites-list");
    const foodCards = document.querySelectorAll(".food-card");
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

    // --- STATE & STORAGE ---
    const commentsStorage = {};
    const reactionsStorage = {};
    let isLoggedIn = false;
    let loggedUser = "";
    let currentFoodName = "";
    let currentFoodImgSrc = "";

    // --- FUNGSI UTAMA ---

    const disableBodyScroll = () => document.body.classList.add("modal-open");
    const enableBodyScroll = () => document.body.classList.remove("modal-open");

    const addFavorite = (foodName, imgSrc) => {
        if (favoritesList.querySelector(`[data-name="${foodName}"]`)) {
            alert(`${foodName} sudah ada di favorit.`);
            return;
        }
        const emptyMsg = favoritesList.querySelector(".empty-fav");
        if (emptyMsg) emptyMsg.remove();
        
        const favItem = document.createElement("div");
        favItem.className = 'fav-item';
        favItem.setAttribute("data-name", foodName);

        const favImg = document.createElement("img");
        favImg.src = imgSrc;
        favImg.alt = foodName;

        const favName = document.createElement("span");
        favName.innerText = foodName;

        const removeBtn = document.createElement("button");
        removeBtn.innerText = 'Hapus';
        removeBtn.className = 'remove-fav-btn';
        removeBtn.onclick = () => {
            favItem.remove();
            if (favoritesList.children.length === 0) {
                 favoritesList.innerHTML = '<p class="empty-fav">Belum ada makanan favorit yang disimpan.</p>';
            }
        };

        favItem.appendChild(favImg);
        favItem.appendChild(favName);
        favItem.appendChild(removeBtn);
        favoritesList.appendChild(favItem);
        alert(`${foodName} ditambahkan ke favorit!`);
    };

    const updateReactions = (foodName) => {
        const reactions = reactionsStorage[foodName] || { likes: 0, dislikes: 0 };
        foodCards.forEach((card) => {
            if (card.querySelector("h3").innerText === foodName) {
                card.querySelector(".like-count").innerText = reactions.likes;
                card.querySelector(".dislike-count").innerText = reactions.dislikes;
            }
        });
        if (currentFoodName === foodName) {
            modalLikeCount.innerText = reactions.likes;
            modalDislikeCount.innerText = reactions.dislikes;
        }
    };

    const displayComments = (foodName) => {
        const comments = commentsStorage[foodName] || [];
        commentsList.innerHTML = "";
        if (comments.length === 0) {
            commentsList.innerHTML = '<div class="no-comments">Belum ada komentar untuk resep ini.</div>';
            return;
        }
        comments.forEach(comment => {
            const commentElement = document.createElement("div");
            commentElement.className = "comment-item";
            commentElement.innerHTML = `
                <div class="comment-author">${comment.name}</div>
                <div class="comment-date">${comment.date}</div>
                <div class="comment-text">${comment.text}</div>
            `;
            commentsList.appendChild(commentElement);
        });
    };

    const openRecipeModal = (imgElement) => {
        modal.classList.remove("hide");
        modal.classList.add("show");
        modal.style.display = "flex";
        disableBodyScroll();

        const data = imgElement.dataset;
        currentFoodName = data.title;
        currentFoodImgSrc = data.image;
        
        modalTitle.innerText = data.title;
        modalDesc.innerText = data.desc;
        modalCook.innerHTML = data.cook;
        modalHistory.innerText = data.history;
        modalImage.src = data.image;
        modalImage.alt = data.title;

        if (!reactionsStorage[currentFoodName]) reactionsStorage[currentFoodName] = { likes: 0, dislikes: 0 };
        updateReactions(currentFoodName);
    };
    
    const closeAllModals = () => {
        if (modal.style.display === "flex") {
            modal.classList.remove("show");
            modal.classList.add("hide");
            setTimeout(() => {
                modal.style.display = "none";
                enableBodyScroll();
            }, 400);
        }
        commentModal.style.display = "none";
        loginModal.style.display = "none";
    };

    // --- EVENT LISTENERS ---

    foodCards.forEach((card) => {
        const foodName = card.querySelector("h3").innerText;
        const foodImg = card.querySelector(".food-img");
        if (!reactionsStorage[foodName]) reactionsStorage[foodName] = { likes: 0, dislikes: 0 };

        foodImg.addEventListener("click", (e) => openRecipeModal(e.target));
        
        card.querySelector(".favorite-btn").addEventListener("click", () => {
            if (!isLoggedIn) return loginModal.style.display = 'block';
            addFavorite(foodName, foodImg.src);
        });
        
        card.querySelector(".like-btn").addEventListener("click", () => {
            if (!isLoggedIn) return loginModal.style.display = 'block';
            reactionsStorage[foodName].likes++;
            updateReactions(foodName);
        });

        card.querySelector(".dislike-btn").addEventListener("click", () => {
            if (!isLoggedIn) return loginModal.style.display = 'block';
            reactionsStorage[foodName].dislikes++;
            updateReactions(foodName);
        });

        card.querySelector(".comment-card-btn").addEventListener("click", () => {
            if (!isLoggedIn) return loginModal.style.display = 'block';
            currentFoodName = foodName;
            commentModal.style.display = "block";
            commentModalTitle.innerText = `Komentar untuk: ${currentFoodName}`;
            commentNameInput.value = loggedUser;
            commentNameInput.readOnly = true;
            displayComments(currentFoodName);
        });
    });

    modalFavBtn.addEventListener("click", () => {
        if (!isLoggedIn) return loginModal.style.display = 'block';
        addFavorite(currentFoodName, currentFoodImgSrc);
    });

    modalLikeBtn.addEventListener("click", () => {
        if (!isLoggedIn) return loginModal.style.display = 'block';
        reactionsStorage[currentFoodName].likes++;
        updateReactions(currentFoodName);
    });

    modalDislikeBtn.addEventListener("click", () => {
        if (!isLoggedIn) return loginModal.style.display = 'block';
        reactionsStorage[currentFoodName].dislikes++;
        updateReactions(currentFoodName);
    });
    
    commentBtn.addEventListener("click", () => {
        if (!isLoggedIn) return loginModal.style.display = 'block';
        commentModal.style.display = "block";
        commentModalTitle.innerText = `Komentar untuk: ${currentFoodName}`;
        commentNameInput.value = loggedUser;
        commentNameInput.readOnly = true;
        displayComments(currentFoodName);
    });

    submitCommentBtn.addEventListener("click", () => {
        const text = commentTextInput.value.trim();
        if (!text) return alert("Mohon isi komentar!");
        const comment = {
            name: loggedUser,
            text: text,
            date: new Date().toLocaleString("id-ID", { dateStyle: 'long', timeStyle: 'short' })
        };
        if (!commentsStorage[currentFoodName]) commentsStorage[currentFoodName] = [];
        commentsStorage[currentFoodName].push(comment);
        commentTextInput.value = "";
        displayComments(currentFoodName);
        alert("Komentar berhasil ditambahkan!");
    });
    
    closeBtn.addEventListener("click", closeAllModals);
    closeCommentModal.addEventListener("click", () => commentModal.style.display = 'none');
    closeLoginModal.addEventListener("click", () => loginModal.style.display = 'none');

    window.addEventListener("click", (e) => {
        if (e.target === modal || e.target === commentModal || e.target === loginModal) {
            closeAllModals();
        }
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeAllModals();
    });
    
    // --- Sistem Login Sederhana ---
    loginButton.addEventListener("click", () => loginModal.style.display = 'block');
    
    logoutButton.addEventListener("click", () => {
        isLoggedIn = false;
        loggedUser = "";
        userGreeting.classList.add("hidden");
        loginButton.classList.remove("hidden");

        // 👇 PERBAIKAN DITAMBAHKAN DI SINI 👇
        // Mengosongkan daftar favorit dan mengembalikan pesan awal
        favoritesList.innerHTML = '<p class="empty-fav">Belum ada makanan favorit yang disimpan.</p>';
        
        alert("Anda telah logout.");
    });

    loginSubmit.addEventListener("click", () => {
        const name = loginNameInput.value.trim();
        const pass = loginPasswordInput.value.trim();
        if (!name || !pass) return alert("Mohon isi nama dan password!");
        isLoggedIn = true;
        loggedUser = name;
        usernameDisplay.innerText = name;
        userGreeting.classList.remove("hidden");
        loginButton.classList.add("hidden");
        loginNameInput.value = 'test';
        loginPasswordInput.value = '1234';
        loginModal.style.display = "none";
        alert(`Selamat datang, ${name}!`);
    });
});