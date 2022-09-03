"use strict";
const hamBtn = document.querySelector(".hamburger-menu-logo__btn");
const hamPic = document.querySelector(".hamburger-picture");
const hamList = document.querySelector(".hamburger-menu-list");

const header = document
  .getElementById("hamburger-menu-logo__toggle")
  .addEventListener("change", (e) => {
    if (e.target.checked) {
      hamBtn.style.transform = "rotate(90deg)";
      hamPic.style.transform = "rotate(90deg)";
      hamList.style.opacity = "1";
      hamList.style.marginLeft = "0";
    } else {
      hamBtn.style.transform = "rotate(0deg)";
      hamPic.style.transform = "rotate(0deg)";
      hamList.style.opacity = "0";
      hamList.style.marginLeft = "-300px";
    }
  });
