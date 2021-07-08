
require("./css/index.css");




const hamburger = document.getElementById("hamburguer");
const navLinks = document.querySelector("ul");
const links = document.querySelectorAll("li");

hamburger.addEventListener("click", () => {
  console.log("a");
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});