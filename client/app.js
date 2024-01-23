const toggle = document.getElementById('toggle');
const body = document.body;

let hamburger = document.querySelector(".hamburger");
let links = document.querySelector(".links");
let toTop = document.querySelector(".to-top");

hamburger.addEventListener("click", () => {
  links.classList.toggle("toggle-links");
});

window.addEventListener("scroll", () => {
  const scrollOffset = 150; // Adjust this value as needed
  if (window.pageYOffset > scrollOffset) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.clientHeight;
  const footerHeight = document.querySelector("footer").clientHeight;

  if (windowHeight + window.pageYOffset >= bodyHeight - footerHeight+500) {
    toTop.style.bottom = "60px";
  } else {
    toTop.style.bottom = "30px";
  }
});

toggle.addEventListener('input', e => {
  const isChecked = e.target.checked;

  if (isChecked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});
