let hamburger = document.querySelector('.hamburger');
let links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
    links.classList.toggle('toggle-links');
})