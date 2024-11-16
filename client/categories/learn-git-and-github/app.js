import { gits } from "../../data/learn-git-and-github.js";

document.addEventListener("DOMContentLoaded", function () {
  function createGitItem(gits) {
    return `
      <div class="swiper-slide">
        <div class="box1">
          <p class="question">${gits.question}</p>
          <div class="source-container">
            <div>
              <span class="source"><p class="italic">By ${gits.source}</p></span>              
            </div>
            <div>
              <button class="btn"><a href="${gits.url}" target="_blank">Visit Site<i class="bi bi-box-arrow-up-right"></i></a></button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  const dynamicGitsContainer = document.querySelector(
    "#dynamic-git .swiper-wrapper"
  );

  gits.forEach((resource) => {
    dynamicGitsContainer.innerHTML += createGitItem(resource);
  });

  const gitSwiper = new Swiper("#dynamic-git", {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        grid: {
          rows: 2
        },
        spaceBetween: 20,
      },
    },
  });
});