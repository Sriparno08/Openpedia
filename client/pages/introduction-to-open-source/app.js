document.addEventListener("DOMContentLoaded", function () {
  const resources = [
    {
      question: "What Is Open Source?",
      source: "Opensource",
      url: "https://opensource.com/resources/what-open-source",
    },
    {
      question: "Introduction To Open Source ?",
      source: "Geeks for geeks",
      url: "https://www.geeksforgeeks.org/introduction-to-open-source-and-its-benefits/",
    },
    {
      question: "An Introduction to Open Source Software",
      source: "HTML Goodies",
      url: "https://www.htmlgoodies.com/guides/an-introduction-to-open-source-software/",
    },
    {
      question: "What Is Open Source?",
      source: "Red Hat",
      url: "https://www.redhat.com/en/topics/open-source/what-is-open-source",
    },
    {
      question: "What Is Open Source and How Does It Work?",
      source: "TechTarget",
      url: "https://www.techtarget.com/whatis/definition/open-source",
    },
    {
      question: "What Is Open Source Software and How Does It Work?",
      source: "Synopsys",
      url: "https://www.synopsys.com/glossary/what-is-open-source-software.html",
    },
    {
      question: "What Is Open Source Software?",
      source: "IBM",
      url: "https://www.ibm.com/topics/open-source",
    },
    {
      question: "What Is Open Source Software?",
      source: "Indeed",
      url: "https://www.indeed.com/career-advice/career-development/open-source-software-definition",
    },
    {
      question: "What Is Open Source?",
      source: "Myra",
      url: "https://www.myrasecurity.com/en/what-is-open-source/",
    },
  ];

  const videos = [
    {
      question: "What is Open Source and How to Start?",
      source: "Kunal Kushwaha",
      url: "https://www.youtube.com/watch?v=msyGybzCKRs",
    },
    {
      question: "Open Source Explained",
      source: "IBM Technology",
      url: "https://www.youtube.com/watch?v=PVD1LNDxOnc",
    },
    {
      question: "What is Open Source Software",
      source: "Brian Daigle",
      url: "https://www.youtube.com/watch?v=1ehpgbb3XD0",
    },
    {
      question: "Open Source Basics",
      source: "Intel Software",
      url: "https://www.youtube.com/watch?v=Tyd0FO0tko8",
    },
    {
      question: "What is Open Source?",
      source: "Mozilla",
      url: "https://www.youtube.com/watch?v=7c0IrsDsNaw",
    },
    {
      question: "What Is Open Source Software?",
      source: "Honeypot",
      url: "https://www.youtube.com/watch?v=TEttd0Qkqnc",
    },
  ];

  function createResourceItem(resource) {
    return `
      <div class="swiper-slide">
        <div class="box1">
          <ul>
            <li>
              <p class="question">${resource.question}</p>
              <div class="source-container">
                <div>
                  <span class="source"><i class="italic">By ${resource.source} -</i></span>              
                </div>
                <div>
                  <button class="btn"><a href="${resource.url}" target="_blank">Visit Site<i class="bi bi-box-arrow-up-right"></i></a><img class="link-arrow" src="/Openpedia/client/assets/open-link-arrow.svg" /></button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    `;
  }

  function createVideoItem(video) {
    return `
      <div class="swiper-slide">
        <div class="box1">
          <ul>
            <li>
              <p class="question">${video.question}</p>
              <div class="source-container">
                <div>
                  <span class="source"><i class="italic">By ${video.source} -</i></span>
                </div>
                <div>  
                  <button class="btn"><a href="${video.url}" target="_blank">View Video<i class="bi bi-box-arrow-up-right"></i></a><img class="link-arrow" src="/Openpedia/client/assets/open-link-arrow.svg" /></button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    `;
  }

  const dynamicResourcesContainer = document.querySelector("#dynamic-resources .swiper-wrapper");
  const dynamicVideosContainer = document.querySelector("#dynamic-videos .swiper-wrapper");

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
      el: '.swiper-pagination',
      type: 'fraction',
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
        spaceBetween: 40,
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
      el: '.swiper-pagination',
      type: 'fraction',
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
        spaceBetween: 40,
      },
    },
  });
});