"use strict";

// swiper
const swiperEl = document.querySelector(".swiper");
if (swiperEl) {
   const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",

      // loop: true,
      slidesPerView: 5,
      centeredSlides: true,
      // If we need pagination
      pagination: {
         el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      breakpoints: {
         250: {
            slidesPerView: 1,
         },
         500: {
            slidesPerView: 2,
         },
         700: {
            slidesPerView: 3,
         },
         1000: {
            slidesPerView: 4,
         },
         1200: {
            slidesPerView: 5,
         },
      },
   });
}

const heartIcon = document.querySelectorAll(".heart-icon");

heartIcon.forEach(function (item) {
   item.addEventListener("click", function () {
      if (item.classList.contains("is_animating")) {
         item.classList.toggle("is_animating");
         item.style.backgroundPosition = "left";
      } else {
         item.classList.toggle("is_animating");
         item.style.backgroundPosition = "right";
      }
   });
});

// fade scroll
const option = {
   root: null,
   rootMargin: "0px",
   threshold: 0.45,
};
function callbackObserver(entries, observer) {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add("fade-animation");
         observer.unobserve(entry.target);
      }
   });
}
let observer = new IntersectionObserver(callbackObserver, option);
const observerEl = document.querySelectorAll(".observer");
observerEl.forEach((item) => {
   observer.observe(item);
});

//  increase the like count
const likeCount = document.querySelectorAll(".card__like-label");
const likeBtn = document.querySelectorAll(".heart-icon");

likeBtn.forEach(function (item) {
   let liked = 0;
   item.addEventListener("click", function (e) {
      const likeItem = e.target.parentNode.querySelector(".card__like-label");
      const likeCount = likeItem.innerText;

      if (liked == 0) {
         liked = 1;
         likeItem.textContent = Number(likeCount) + 1;
         console.log(liked);
      } else {
         liked = 0;
         likeItem.textContent = Number(likeCount) - 1;
      }
   });
});
