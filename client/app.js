const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  const scrollOffset = 150;

  if (window.scrollY > scrollOffset) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});