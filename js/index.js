"use strict";

const API_URL = "https://api.adviceslip.com/advice";
const adviceTitle = document.querySelector(".card__header__title");
const quoteText = document.querySelector(".card__content__text");
const generateButton = document.querySelector(".card__footer__btn");
const svgbtn = document.getElementById("svgbtn");

const generateQuote = async () => {
  try {
    svgbtn.classList.add("loading__spinner");
    const req = await fetch(API_URL);
    const {
      slip: { advice, id },
    } = await req.json();
    adviceTitle.textContent = `Advice #${id}`;
    quoteText.textContent = `"${advice}"`;
    svgbtn.classList.remove("loading__spinner");
  } catch (err) {
    svgbtn.classList.remove("loading__spinner");
    console.log(err);
  }
};

generateButton.addEventListener("click", generateQuote);

// add quote when page is loaded
window.addEventListener('DOMContentLoaded', generateQuote);