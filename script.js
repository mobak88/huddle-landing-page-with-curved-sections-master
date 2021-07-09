"use strict";

// Variables
const subscribeInput = document.querySelector(".footer__subscribe");
const subscribeBtn = document.querySelector(".footer__btn");
const invalidText = document.querySelector(".footer__paragraf--default");
const tester =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Mail validation

subscribeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const userInput = subscribeInput.value;
  if (userInput.match(tester)) {
    invalidText.innerHTML = "Thank you for subscribing";
    subscribeInput.classList.remove("footer__subscribe--invalid");
    invalidText.classList.remove("footer__paragraf--hidden");
    invalidText.classList.remove("footer__paragraf--invalid");
    subscribeInput.classList.add("footer__subscribe--valid");
    invalidText.classList.add("footer__paragraf--valid");
  } else {
    invalidText.innerHTML = "Check your email please";
    subscribeInput.classList.remove("footer__subscribe--valid");
    invalidText.classList.remove("footer__paragraf--hidden");
    invalidText.classList.remove("footer__paragraf--valid");
    subscribeInput.classList.add("footer__subscribe--invalid");
    invalidText.classList.add("footer__paragraf--invalid");
  }
});
