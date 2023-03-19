// TODO click on the photo and replace with other one

"use strict";

const sugestedPhoto = document.querySelectorAll(
   ".profile__content__uplode-child img"
);
const showedPhoto = document.querySelector(".profile__img img");

sugestedPhoto.forEach((item) => {
   item.addEventListener("click", (e) => {
      const reservedPhoto = showedPhoto.src;
      showedPhoto.src = item.src;
      item.src = reservedPhoto;
   });
});

const updateProfPhotoBtn = document.querySelector(".profile__img-btn-upload");
const headerProfilePhoto = document.querySelector(
   ".header__buttons__container-profile img"
);

updateProfPhotoBtn.addEventListener("click", function (e) {
   headerProfilePhoto.src = showedPhoto.src;
});
