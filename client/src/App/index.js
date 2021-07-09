
require("./css/index.css");


const descarga = require("./css/img/descarga.jpg");
const Cloud = require("./css/img/Cloud.jpg");

const hamburger = document.getElementById("hamburguer");
const navLinks = document.querySelector("ul");
const links = document.querySelectorAll("li");
const lines = document.querySelectorAll(".line");


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  lines.forEach(line => {
      line.classList.toggle("move");
  });
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

const left_button = document.querySelector(".scroll_left");
const right_button = document.querySelector(".scroll_right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll("img");


let counter = 1;
const size = images[0].clientWidth;

right_button.addEventListener("click", () => {
  slider.style.transition = "transform 0.4s ease-in-out";
  console.log(-size);
  counter++;
  slider.style.transform = "translateX(" + (-size * counter) + "px)";
});

left_button.addEventListener("click", () => {
  slider.style.transition = "transform 0.4s ease-in-out";
  console.log(counter);
  counter--;
  
  slider.style.transform = "translateX(" + (-size * counter) + "px)";
});

slider.addEventListener("transitionend", () => {
  
  if(images[counter].id == "lastClone") {
    
    slider.style.transition = "none";
    counter = images.length - 2;
    slider.style.transform = "translateX(" + (-size * counter) + "px)";
  }
  if(images[counter].id == "firstClone") {
    
    slider.style.transition = "none";
    counter = 1;
    slider.style.transform = "translateX(" + (-size * counter) + "px)";
  }
     

})

setInterval(() => {
     slider.style.transition = "transform 0.4s ease-in-out";
  console.log("AS");
  
  counter++;
  slider.style.transform = "translateX(" + (-size * counter) + "px)";
    
  }, (100000));


