import { darkTheme } from "./pages/beginner-friendly-repos/appBFR.js";


const body = document.body;
const links = document.querySelector(".links");
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  const scrollOffset = 150;

  if (window.scrollY > scrollOffset) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


// Dark mode switching for themeToggle

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  console.log('themeToggle clicked')
  // Toggle Font Awesome icons

  const moonIcon = themeToggle.querySelector(".fa-moon");
  const sunIcon = themeToggle.querySelector(".fa-sun");

  if (body.classList.contains("dark-theme")) {
    moonIcon.style.display = "inline";
    sunIcon.style.display = "none";
    localStorage.setItem("theme", "dark");
  } else {
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
    localStorage.setItem("theme", "light");
  }

});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-theme");
} else {
  body.classList.remove("dark-theme");
}
darkTheme()
