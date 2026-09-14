// ================================
// PROFILE PHOTO - DEFAULT DISPLAY
// ================================

const profilePhoto = document.getElementById("profilePhoto");

// Load default profile photo on page load
window.addEventListener("load", function() {
    profilePhoto.classList.add("loaded");
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