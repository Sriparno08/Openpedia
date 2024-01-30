const body = document.body;
// Dark mode switching for themeToggle
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    // Toggle Font Awesome icons
    const moonIcon = themeToggle.querySelector('.fa-moon');
    const sunIcon = themeToggle.querySelector('.fa-sun');

    if (body.classList.contains('dark-theme')) {
        moonIcon.style.display = 'inline';
        sunIcon.style.display = 'none';
    } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline';
    }
});
