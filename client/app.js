const body = document.body;

const links = document.querySelector(".links");
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  const scrollOffset = 150; // Adjust this value as needed

  if (window.scrollY > scrollOffset) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }

  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.clientHeight;
  const footerHeight = document.querySelector("footer").clientHeight;

  if (windowHeight + window.scrollY >= bodyHeight - footerHeight + 500) {
    toTop.style.bottom = "60px";
  } else {
    toTop.style.bottom = "30px";
  }
});

// Dark mode switching for themeToggle

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

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