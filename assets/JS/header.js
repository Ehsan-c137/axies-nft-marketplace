"use strict";

// header sticky
const header = document.querySelector(".header");
const goToTopbtn = document.querySelector(".go-to-top-btn");

if (window.pageYOffset > 100) header.classList.add("sticky");
window.onscroll = () => {
   if (window.pageYOffset > 100) {
      header.classList.add("sticky");
      goToTopbtn.classList.add("go-to-top-btn-active");
   } else {
      header.classList.remove("sticky");
      goToTopbtn.classList.remove("go-to-top-btn-active");
   }
};
goToTopbtn.addEventListener("click", function () {
   document.body.scrollIntoView({
      behavior: "smooth",
   });
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// header search
const headerWallet = document.querySelector(".header__wallet");

if (getComputedStyle(headerWallet).display == "flex") {
   document.body.addEventListener("click", function (e) {
      const item = e.target.closest(".search__label");
      const item2 = e.target.closest(".search__input");

      if (item || item2) {
         headerWallet.style.display = "none";
         document.body.focus();
      } else {
         headerWallet.style.display = "flex";
      }
   });
}

const headerMenu = document.querySelector(".header_buttons__menu");
const headerMenuClose = document.querySelector(".header_buttons__menu__close");
const headerMenuOpen = document.querySelector(".header_buttons__menu__open");
const headerMenuLinks = document.querySelector("header ul");

headerMenu.addEventListener("click", () => {
   headerMenuLinks.classList.toggle("active-menu");
   headerMenuClose.classList.toggle("hidden");
   headerMenuOpen.classList.toggle("hidden");
});

// change theme
const darkModeBtn = document.querySelector(".darkmode-btn");
const lightModeBtn = document.querySelector(".lightmode-btn");
const changeThemeContainer = document.querySelector(".change-theme");
const bodyEl = document.querySelector("body");

darkModeBtn.addEventListener("click", () => {
   bodyEl.classList.remove("light-theme");
   bodyEl.classList.add("dark-theme");
});

lightModeBtn.addEventListener("click", () => {
   bodyEl.classList.remove("dark-theme");
   bodyEl.classList.add("light-theme");
});
changeThemeContainer.addEventListener("click", () => {
   lightModeBtn.classList.toggle("hidden");
   darkModeBtn.classList.toggle("hidden");
});
