document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".nav-container .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".nav-container .mobile-menu-list-container");

  toggleBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});
