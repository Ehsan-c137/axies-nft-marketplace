"use strict";
// tabbed
const tabbedHeader = document.querySelector(".card-desc__tabbed-header");

tabbedHeader.addEventListener("click", function (e) {
   const clicked = e.target.dataset.tab;
   if (!clicked) return;

   tabbedHeader
      .querySelector(".card-desc__tabbed-active")
      .classList.remove("card-desc__tabbed-active");
   e.target.classList.toggle("card-desc__tabbed-active");

   const activedTab = document.querySelector(".tab-active");
   activedTab.classList.remove("tab-active");
   activedTab.classList.toggle("hidden");

   const clickedTab = document.querySelector(`.tab-${clicked}`);

   clickedTab.classList.add("tab-active");
   clickedTab.classList.remove("hidden");
});
