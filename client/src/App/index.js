require("./scss/index.scss");
require("./css/index.css");
import "regenerator-runtime/runtime";
import { DataMessage } from "./js/message.js";
import { UI } from "./js/ui.js";
const ui = new UI();
ui.getMessages();

const hamburger = document.getElementById("hamburguer");
const navLinks = document.querySelector("nav > div:nth-child(2)");
const links = document.querySelectorAll("li");
const lines = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  lines.forEach((line) => {
    line.classList.toggle("move");
  });
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

const left_button = document.querySelector(".scroll_left");
const right_button = document.querySelector(".scroll_right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll("img");

const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = false; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Button events
next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

function sendMail(params) {
  var temParams = {
    from_name: params.email,
    to_name: params.name,
    message: params.message,
  };
  emailjs
    .send(
      "service_x04vuvd",
      "template_d9zpllb",
      temParams,
      "user_Hy82PGE5Z3eRCYvWWHAEi"
    )
    .then(function (res) {
      console.log("sucees");
    });
}

const messageForm = document.querySelector("form");
const form_btn = document.getElementById("formSubmit");
const email = document.getElementById("email");
const name = document.getElementById("Name");
const msg = document.getElementById("Message");

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = new DataMessage(name.value, email.value, msg.value);
   name.value = "";
  email.value= "";
  msg.value = "";
  ui.addMessages(message);
  //sendMail(message);
});

const button_side = document.querySelector(".button_side");
const side_board = document.querySelector(".board");

button_side.addEventListener("click", () => {
  side_board.classList.toggle("slider_side");
  button_side.classList.toggle("button_fade");
});
