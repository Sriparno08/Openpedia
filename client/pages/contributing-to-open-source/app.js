document.addEventListener("DOMContentLoaded", function () {
  const contribution = [
    {
      resource: "How to Contribute to the Open source?",
      publisher: "By Github",
      url: "https://opensource.guide/how-to-contribute/",
      image: "../../assets/illustration-1.jpg"
    },
    {
      resource: "How to Contribute to Open Source Projects?",
      publisher: "by freeCodeCamp",
      url: "https://opensource.guide/how-to-contribute/",
      image: "../../assets/illustration-2.jpg"
    },
    {
      resource: "Getting Started With Contributing to Open Source",
      publisher: "By Stack Overflow",
      url: "https://stackoverflow.blog/2020/08/03/getting-started-with-contributing-to-open-source/",
      image: "../../assets/illustration-3.jpg"
    },
    {
      resource: "How to Get Started With Open Source?",
      publisher: "By HackerEarth",
      url: "https://www.hackerearth.com/getstarted-opensource/",
      image: "../../assets/illustration-4.jpg"
    },
    {
      resource: "How to Contribute to Open Source Projects?",
      publisher: "By RubyGarage",
      url: "https://rubygarage.org/blog/how-contribute-to-open-source-projects",
      image: "../../assets/illustration-5.jpg"
    },
    {
      resource: "Beginners Guide to Contributing to Open Source Projects",
      publisher: "By ActiveState",
      url: "https://www.activestate.com/blog/beginners-guide-to-contributing-to-open-source-projects",
      image: "../../assets/illustration-6.jpg"
    },
    {
      resource:
        "14 Ways to Contribute to Open Source",
      publisher: "By SmartBear",
      url: "https://smartbear.com/blog/14-ways-to-contribute-to-open-source-without-being/",
      image: "../../assets/illustration-1.jpg"
    },
    {
      resource: "8 Non-Code Ways to Contribute to Open Source",
      publisher: "By Opensource",
      url: "https://opensource.com/life/16/1/8-ways-contribute-open-source-without-writing-code",
      image: "../../assets/illustration-2.jpg"
    },
    {
      resource: "Contributing to Open Source: Getting Started",
      publisher: "By GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/contributing-to-open-source-getting-started/",
      image: "../../assets/illustration-3.jpg"
    },
    {
      resource: "How to Start Contributing to Open Source Software?",
      publisher: "By Towards Data Science",
      url: "https://towardsdatascience.com/how-to-start-contributing-to-open-source-software-9651ca4cedd4",
      image: "../../assets/illustration-4.jpg"
    },
    {
      resource:
        "Get Involved in Open Source and Commit Code to Your First Project",
      publisher: "By First Timers Only",
      url: "https://www.firsttimersonly.com/",
      image: "../../assets/illustration-5.jpg"
    },
    {
      resource: "Why and How to Contribute to Open Source Projects?",
      publisher: "By Testsigma",
      url: "https://testsigma.com/blog/why-how-to-contribute-to-open-source-projects/",
      image: "../../assets/illustration-6.jpg"
    },
  ];

  function createContributionItem(value) {
    return `
      <div class='box1'>
        <div class='img'><img src="${value.image}" alt="" srcset=""></div>
        <div class='desc'>
          <div class='resource'>${value.resource}</div>
          <div class='publisher'><p>${value.publisher}</p></div>
          <a href="${value.url}" target="_blank">Visit Site</a>
        </div>      
      </div>
      `;
  }

  const dynamicContributionContainer = document.getElementById(
    "dynamic-contribution"
  );

  contribution.forEach((value) => {
    dynamicContributionContainer.innerHTML += createContributionItem(value);
  });

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
});
