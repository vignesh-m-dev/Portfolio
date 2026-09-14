// ================================
// PROFILE PHOTO UPLOAD
// ================================

const profilePhoto = document.getElementById("profilePhoto");
const photoPlaceholder = document.querySelector(".photo-placeholder");
const profilePhotoContainer = document.querySelector(".profile-photo-container");

// Click to upload photo
photoPlaceholder.addEventListener("click", function() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    
    input.addEventListener("change", function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                profilePhoto.src = event.target.result;
                profilePhoto.classList.add("loaded");
                localStorage.setItem("profilePhoto", event.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
    
    input.click();
});

// Load saved profile photo on page load
window.addEventListener("load", function() {
    const savedPhoto = localStorage.getItem("profilePhoto");
    if (savedPhoto) {
        profilePhoto.src = savedPhoto;
        profilePhoto.classList.add("loaded");
    }
});

// Allow drag and drop
profilePhotoContainer.addEventListener("dragover", function(e) {
    e.preventDefault();
    photoPlaceholder.style.borderColor = "rgba(255, 255, 255, 1)";
    photoPlaceholder.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.3) 100%)";
});

profilePhotoContainer.addEventListener("dragleave", function(e) {
    e.preventDefault();
    photoPlaceholder.style.borderColor = "rgba(255, 255, 255, 0.5)";
    photoPlaceholder.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)";
});

profilePhotoContainer.addEventListener("drop", function(e) {
    e.preventDefault();
    photoPlaceholder.style.borderColor = "rgba(255, 255, 255, 0.5)";
    photoPlaceholder.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)";
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        const file = files[0];
        if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function(event) {
                profilePhoto.src = event.target.result;
                profilePhoto.classList.add("loaded");
                localStorage.setItem("profilePhoto", event.target.result);
            };
            reader.readAsDataURL(file);
        }
    }
});


// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ================================
// CLOSE MENU WHEN LINK IS CLICKED
// ================================

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ================================
// CURRENT YEAR
// ================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================================
// CHANGE MENU ICON
// ================================

menuBtn.addEventListener("click", function () {

    if (navLinks.classList.contains("active")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});