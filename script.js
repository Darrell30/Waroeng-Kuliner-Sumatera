const favoritesList = document.getElementById("favorites-list");
const foodCards = document.querySelectorAll(".food-card");

// Penyimpanan komentar untuk setiap makanan
const commentsStorage = {};

// Penyimpanan jumlah like/dislike untuk setiap makanan
const reactionsStorage = {};

// Status login
let isLoggedIn = false;
let loggedUser = "";

// --- FAVORIT, LIKE, DISLIKE DI CARD ---
foodCards.forEach((card) => {
    const favBtn = card.querySelector(".favorite-btn");
    const likeBtn = card.querySelector(".like-btn");
    const dislikeBtn = card.querySelector(".dislike-btn");

    const foodName = card.querySelector("h3").innerText;

    // Pastikan data awal ada
    if (!reactionsStorage[foodName]) {
        reactionsStorage[foodName] = { likes: 0, dislikes: 0 };
    }

    favBtn.addEventListener("click", () => {
        if (!isLoggedIn) {
            openLoginModal();
            return;
        }
        if (favoritesList.querySelector(`[data-name="${foodName}"]`)) {
            alert(`${foodName} sudah ada di favorit.`);
            return;
        }
        const emptyMsg = favoritesList.querySelector(".empty-fav");
        if (emptyMsg) emptyMsg.remove();
        const favItem = document.createElement("p");
        favItem.innerText = foodName;
        favItem.setAttribute("data-name", foodName);
        favItem.style.padding = "0.5rem 0";
        favItem.style.borderBottom = "1px solid #a47551";
        favoritesList.appendChild(favItem);
    });

    likeBtn.addEventListener("click", () => {
        if (!isLoggedIn) {
            openLoginModal();
            return;
        }
        reactionsStorage[foodName].likes++;
        updateReactions(foodName);
    });

    dislikeBtn.addEventListener("click", () => {
        if (!isLoggedIn) {
            openLoginModal();
            return;
        }
        reactionsStorage[foodName].dislikes++;
        updateReactions(foodName);
    });
});

// --- MODAL POP UP UTAMA ---
const modal = document.getElementById("food-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalCook = document.getElementById("modal-cook");
const modalHistory = document.getElementById("modal-history");
const modalImage = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close-btn");
const commentBtn = document.getElementById("comment-btn");

// --- TOMBOL FAVORIT, LIKE, DISLIKE DI MODAL ---
const modalFavBtn = document.querySelector(".modal-fav-btn");
const modalLikeBtn = document.querySelector(".modal-like-btn");
const modalDislikeBtn = document.querySelector(".modal-dislike-btn");
const modalLikeCount = document.querySelector(".modal-like-count");
const modalDislikeCount = document.querySelector(".modal-dislike-count");

modalFavBtn.addEventListener("click", () => {
    if (!isLoggedIn) {
        openLoginModal();
        return;
    }
    if (favoritesList.querySelector(`[data-name="${currentFoodName}"]`)) {
        alert(`${currentFoodName} sudah ada di favorit.`);
        return;
    }
    const emptyMsg = favoritesList.querySelector(".empty-fav");
    if (emptyMsg) emptyMsg.remove();
    const favItem = document.createElement("p");
    favItem.innerText = currentFoodName;
    favItem.setAttribute("data-name", currentFoodName);
    favItem.style.padding = "0.5rem 0";
    favItem.style.borderBottom = "1px solid #a47551";
    favoritesList.appendChild(favItem);
    alert(`${currentFoodName} ditambahkan ke favorit!`);
});

modalLikeBtn.addEventListener("click", () => {
    if (!isLoggedIn) {
        openLoginModal();
        return;
    }
    reactionsStorage[currentFoodName].likes++;
    updateReactions(currentFoodName);
});

modalDislikeBtn.addEventListener("click", () => {
    if (!isLoggedIn) {
        openLoginModal();
        return;
    }
    reactionsStorage[currentFoodName].dislikes++;
    updateReactions(currentFoodName);
});

// --- MODAL POP UP KOMENTAR ---
const commentModal = document.getElementById("comment-modal");
const commentModalTitle = document.getElementById("comment-modal-title");
const closeCommentModal = document.getElementById("close-comment-modal");
const commentsList = document.getElementById("comments-list");
const submitCommentBtn = document.getElementById("submit-comment");
const commentNameInput = document.getElementById("comment-name");
const commentTextInput = document.getElementById("comment-text");

let currentFoodName = "";

// Event untuk buka modal resep
document.querySelectorAll(".food-img").forEach(img => {
    img.addEventListener("click", () => {
        modal.classList.add("show");
        modal.classList.remove("hide");
        modal.style.display = "flex"; // biar center

        modalTitle.innerText = img.dataset.title;
        modalDesc.innerText = img.dataset.desc;
        modalCook.innerHTML = img.dataset.cook;
        modalHistory.innerText = img.dataset.history;
        modalImage.src = img.dataset.image;
        modalImage.alt = img.dataset.title;
        currentFoodName = img.dataset.title;

        if (!reactionsStorage[currentFoodName]) {
            reactionsStorage[currentFoodName] = { likes: 0, dislikes: 0 };
        }
        updateReactions(currentFoodName);
    });
});

// Tutup modal resep
closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    modal.classList.add("hide");
    setTimeout(() => {
        modal.style.display = "none";
    }, 400); // sesuai durasi flipOut
});

// Tutup modal jika klik luar
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
        modal.classList.add("hide");
        setTimeout(() => {
            modal.style.display = "none";
        }, 400);
    }
    if (e.target === commentModal) {
        commentModal.style.display = "none";
    }
});

// --- EVENT KOMENTAR ---
commentBtn.addEventListener("click", () => {
    if (!isLoggedIn) {
        openLoginModal();
        return;
    }
    commentModal.style.display = "block";
    commentModalTitle.innerText = `Komentar untuk: ${currentFoodName}`;

    // otomatis isi nama sesuai user login
    commentNameInput.value = loggedUser;
    commentNameInput.readOnly = true;

    displayComments(currentFoodName);
});

// Tutup modal komentar
closeCommentModal.addEventListener("click", () => {
    commentModal.style.display = "none";
});

// Tambah komentar baru
submitCommentBtn.addEventListener("click", () => {
    if (!isLoggedIn) {
        openLoginModal();
        return;
    }
    const name = loggedUser; // ✅ pakai nama login
    const text = commentTextInput.value.trim();

    if (!text) {
        alert("Mohon isi komentar!");
        return;
    }

    const comment = {
        name: name,
        text: text,
        date: new Date().toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        })
    };

    if (!commentsStorage[currentFoodName]) {
        commentsStorage[currentFoodName] = [];
    }
    commentsStorage[currentFoodName].push(comment);

    commentTextInput.value = "";

    displayComments(currentFoodName);

    alert("Komentar berhasil ditambahkan!");
});

// Fungsi render komentar
function displayComments(foodName) {
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
}

// --- UPDATE REACTIONS (SYNC CARD & MODAL) ---
function updateReactions(foodName) {
    const { likes, dislikes } = reactionsStorage[foodName];

    // Update di card (homepage)
    foodCards.forEach((card) => {
        if (card.querySelector("h3").innerText === foodName) {
            card.querySelector(".like-count").innerText = likes;
            card.querySelector(".dislike-count").innerText = dislikes;
        }
    });

    // Update di modal (kalau sedang lihat makanan ini)
    if (modalTitle.innerText === foodName) {
        modalLikeCount.innerText = likes;
        modalDislikeCount.innerText = dislikes;
    }
}

// --- LOGIN POPUP ---
const loginModal = document.getElementById("login-modal");
const closeLoginModal = document.getElementById("close-login-modal");
const loginSubmit = document.getElementById("login-submit");
const loginNameInput = document.getElementById("login-name");
const loginPasswordInput = document.getElementById("login-password");

function openLoginModal() {
    loginModal.style.display = "block";
}

closeLoginModal.addEventListener("click", () => {
    loginModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = "none";
    }
});

loginSubmit.addEventListener("click", () => {
    const name = loginNameInput.value.trim();
    const pass = loginPasswordInput.value.trim();

    if (!name || !pass) {
        alert("Mohon isi nama dan password!");
        return;
    }

    isLoggedIn = true;
    loggedUser = name;

    alert(`Selamat datang, ${name}!`);
    loginModal.style.display = "none";
});
