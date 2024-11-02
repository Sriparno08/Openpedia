const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  const scrollOffset = 150;

  if (window.scrollY > scrollOffset) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


// Show the Rate Us box after 30 seconds
setTimeout(function () {
  document.getElementById('rateUsOverlay').classList.add('active');
}, 30000);

// Close the Rate Us box
document.getElementById('closeButton').addEventListener('click', function () {
  document.getElementById('rateUsOverlay').classList.remove('active');
});

// Star hover and selection behavior
const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener('mouseover', function () {
    const value = this.getAttribute('data-value');
    highlightStars(value);
  });

  star.addEventListener('mouseout', function () {
    highlightStars(selectedRating); // Show the selected rating on mouseout
  });

  star.addEventListener('click', function () {
    selectedRating = this.getAttribute('data-value');
    highlightStars(selectedRating);
  });
});

function highlightStars(value) {
  stars.forEach(star => {
    if (star.getAttribute('data-value') <= value) {
      star.classList.add('hovered');
    } else {
      star.classList.remove('hovered');
    }
  });
}

document.getElementById('submitButton').addEventListener('click', function () {
  if (selectedRating > 0) {
    alert(`You rated ${selectedRating} stars. Thank You for your valuable feedback!`); // Optional alert for demo purposes
    document.getElementById('rateUsOverlay').classList.remove('active'); // Hide the rating box
  } else {
    alert('Please select a rating before submitting!'); // Alert if no rating is selected
  }
});

