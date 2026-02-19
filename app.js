//toggle mobile menu

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".nav-container .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".nav-container .mobile-menu-list-container");

  toggleBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

// Change navbar background on scroll

const navbarBackground = document.querySelector(".nav-container");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbarBackground.classList.add("navbar-scroll");
  } else {
    navbarBackground.classList.remove("navbar-scroll");
  }
});
