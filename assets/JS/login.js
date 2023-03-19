"use strict";

const inputContainer = document.querySelectorAll(".input");
const inputMain = document.querySelectorAll(".input-main");
const inputPlaceholder = document.querySelectorAll(".input-placeholder");

inputContainer.forEach(function (item) {
   item.addEventListener("click", function (el) {
      const target = el.target;

      const input = target.closest(".input");
      const inputNumber = input.getAttribute("data-input");
      const inputFocus = input.querySelector(".input-main");
      inputFocus.focus();

      inputPlaceholder[inputNumber].classList.add("input-placeholder-active");

      inputFocus.onblur = function () {
         if (!inputFocus.value) {
            inputPlaceholder[inputNumber].classList.remove(
               "input-placeholder-active"
            );
         }
      };
   });
});

// // validate email
// const passwordInput = document.querySelector(".input__password .input-main");
// const emailInput = document.querySelector(".input__email .input-main");
// const signInBtn = document.querySelector(".sign-in-button");

// // this is must not happend in JS and that's just for test
// function validateEmail(email) {
//    return String(email)
//       .toLowerCase()
//       .match(
//          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
// }

// function validatePassword(password) {
//    String(password) === "1111" ? true : false;
// }

// signInBtn.disabled = true;
// signInBtn.style.cursor = "not-allowed";

// emailInput.addEventListener("keyup", function (e) {
//    if (validateEmail(emailInput.value)) {
//       document.querySelector(".input__email").classList.add("correct-mail");
//       signInBtn.disabled = false;
//       signInBtn.style.cursor = "pointer";
//    } else {
//       document.querySelector(".input__email").classList.remove("correct-mail");
//    }
// });

// signInBtn.addEventListener("click", function () {});
