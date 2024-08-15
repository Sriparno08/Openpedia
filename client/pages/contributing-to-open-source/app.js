document.addEventListener("DOMContentLoaded", function() {
    const contribution = [
      {
        question: "How to Contribute to the Open source?",
        source: "By Github",
        url: "https://opensource.guide/how-to-contribute/"
      },
      {
        question: "How to Contribute to Open Source Projects?",
        source: "A Beginner's Guide by freeCodeCamp",
        url: "https://opensource.guide/how-to-contribute/"
      },
      {
        question: "Getting Started With Contributing to Open Source",
        source: "By Stack Overflow",
        url: "https://stackoverflow.blog/2020/08/03/getting-started-with-contributing-to-open-source/"
      },
      {
        question: "How to Get Started With Open Source?",
        source: "By HackerEarth",
        url: "https://www.hackerearth.com/getstarted-opensource/"
      },
      {
        question: "How to Contribute to Open Source Projects?",
        source: "By RubyGarage",
        url: "https://rubygarage.org/blog/how-contribute-to-open-source-projects"
      },
      {
        question: "Beginners Guide to Contributing to Open Source Projects",
        source: "By ActiveState",
        url: "https://www.activestate.com/blog/beginners-guide-to-contributing-to-open-source-projects"
      },
      {
        question: "14 Ways to Contribute to Open Source Without Being a Programming Genius or a Rock Star",
        source: "By SmartBear",
        url: "https://smartbear.com/blog/14-ways-to-contribute-to-open-source-without-being/"
      },
      {
        question: "8 Non-Code Ways to Contribute to Open Source",
        source: "By Opensource",
        url: "https://opensource.com/life/16/1/8-ways-contribute-open-source-without-writing-code"
      },
      {
        question: "Contributing to Open Source: Getting Started",
        source: "By GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/contributing-to-open-source-getting-started/"
      },
      {
        question: "How to Start Contributing to Open Source Software?",
        source: "By Towards Data Science",
        url: "https://towardsdatascience.com/how-to-start-contributing-to-open-source-software-9651ca4cedd4"
      },
      {
        question: "Get Involved in Open Source and Commit Code to Your First Project",
        source: "By First Timers Only",
        url: "https://www.firsttimersonly.com/"
      },
      {
        question: "Why and How to Contribute to Open Source Projects?",
        source: "By Testsigma",
        url: "https://testsigma.com/blog/why-how-to-contribute-to-open-source-projects/"
      },
    ];
  
    function createContributionItem(value) {
      return `
        <div class="box1">
          <ul>
            <li>
              <p class="question">${value.question}</p>
              <span class="source"><i class="italic">${value.source} -</i></span>
              <button class="btn"><a href="${value.url}" target="_blank">Visit Site<i class="bi bi-box-arrow-up-right"></i></a></button>
            </li>
          </ul>
        </div>
      `;
    }
  
    const dynamicContributionContainer = document.getElementById("dynamic-contribution");
  
    contribution.forEach(value => {
      dynamicContributionContainer.innerHTML += createContributionItem(value);
    });

    const body = document.body;
    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-theme");
      console.log('themeToggle clicked')
      // Toggle Font Awesome icons

      const moonIcon = themeToggle.querySelector(".fa-moon");
      const sunIcon = themeToggle.querySelector(".fa-sun");

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