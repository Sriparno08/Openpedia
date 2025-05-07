const body = document.body;
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  console.log("themeToggle clicked");
  // Toggle Font Awesome icons

  const moonIcon = themeToggle.querySelector(".moon");
  const sunIcon = themeToggle.querySelector(".sun");

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