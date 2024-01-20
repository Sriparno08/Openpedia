const toggle = document.getElementById('toggle');
const body = document.body;

let hamburger = document.querySelector(".hamburger");
let links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
  links.classList.toggle("toggle-links");
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
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
