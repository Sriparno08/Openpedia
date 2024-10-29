import { resources, videos } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  function createResourceItem(resource) {
    return `
      <div class="swiper-slide">
        <div class="box1">
          <p class="question">${resource.question}</p>
          <div class="source-container">
            <div>
              <span class="source"><p class="italic">By ${resource.source}</p></span>              
            </div>
            <div>
              <button class="btn"><a href="${resource.url}" target="_blank">Visit Site<i class="bi bi-box-arrow-up-right"></i></a><img class="link-arrow" src="/assets/open-link-arrow.svg" /></button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function createVideoItem(video) {
    return `
      <div class="swiper-slide">
        <div class="box1">
          <p class="question">${video.question}</p>
          <div class="source-container">
            <div>
              <span class="source"><p class="italic">By ${video.source}</p></span>
            </div>
            <div>  
              <button class="btn"><a href="${video.url}" target="_blank">View Video<i class="bi bi-box-arrow-up-right"></i></a><img class="link-arrow" src="/assets/open-link-arrow.svg" /></button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  const dynamicResourcesContainer = document.querySelector(
    "#dynamic-resources .swiper-wrapper"
  );
  const dynamicVideosContainer = document.querySelector(
    "#dynamic-videos .swiper-wrapper"
  );

  resources.forEach((resource) => {
    dynamicResourcesContainer.innerHTML += createResourceItem(resource);
  });

  videos.forEach((video) => {
    dynamicVideosContainer.innerHTML += createVideoItem(video);
  });

  const resourcesSwiper = new Swiper("#dynamic-resources", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  const videosSwiper = new Swiper("#dynamic-videos", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },
  });
});