"use strict";

const liveActionsTimeLabel = document.querySelectorAll(
   ".live-acutions__time-label"
);

const countDownDates = [
   new Date("Apr 27, 2023 15:37:25").getTime(),
   new Date("Apr 25, 2023 11:11:55").getTime(),
   new Date("Apr 29, 2023 01:53:00").getTime(),
   new Date("Apr 11, 2023 09:00:00").getTime(),
   new Date("Apr 30, 2023 21:25:37").getTime(),
   new Date("Apr 10, 2023 18:44:14").getTime(),
   new Date("Apr 15, 2023 10:04:40").getTime(),
   new Date("Apr 26, 2023 13:31:05").getTime(),
   new Date("Apr 15, 2023 18:44:30").getTime(),
   new Date("Apr 5, 2023 20:14:20").getTime(),
   new Date("Apr 19, 2023 01:53:00").getTime(),
   new Date("Apr 21, 2023 09:00:00").getTime(),
   new Date("Apr 20, 2023 21:25:37").getTime(),
];

for (const [i, l] of Object.entries(liveActionsTimeLabel)) {
   const cardTimer = setInterval(function () {
      const countDownDate = countDownDates[i];
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      liveActionsTimeLabel[i].textContent = `${days} : ${
         hours > 0 ? hours : "0" + hours
      } : ${minutes > 10 ? minutes : "0" + minutes} : ${
         seconds > 10 ? seconds : "0" + seconds
      }`;

      if (distance < 0) {
         clearInterval(cardTimer);
         liveActionsTimeLabel[i].textContent = "EXPIRED";
      }
   }, 1000);
}
