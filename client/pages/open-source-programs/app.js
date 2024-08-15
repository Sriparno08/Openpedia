document.addEventListener("DOMContentLoaded", function () {
    const SOC = [
        {
            name: "Google Season of Docs",
            content: "Google Season of Docs provides support for open source projects to improve their documentation and gives professional technical writers an opportunity to gain experience in open source. Together we raiseawareness of open source, of docs, and of technical writing...",
            url: "https://developers.google.com/season-of-docs/",
            timeline: "https://developers.google.com/season-of-docs/docs/timeline",
            reward: "3000 USD to 6600 USD"
        },
        {
            name: "Outreachy",
            content: "Google Summer of Code is a global, online program focused on bringing new contributors into open source software development. GSoC Contributors work with an open source organization on a 12+ week programming project under the guidance of mentors...",
            url: "https://www.outreachy.org/",
            timeline: "May to August, or December to Marc",
            reward: "$7,000 USD"
        },
        {
            name: "Google Summer of Code",
            content: "Google Season of Docs provides support for open source projects to improve their documentation and gives professional technical writers an opportunity to gain experience in open source. Together we raiseawareness of open source, of docs, and of technical writing...",
            url: "https://summerofcode.withgoogle.com/",
            timeline: "https://developers.google.com/open-source/gsoc/timeline",
            reward: "1500 USD to 3000 USD"
        },
        {
            name: "MLH Fellowship",
            content: "A fully remote, 12-week internship alternative where participants earn a stipend and learn to collaborate on real open source projects with peers and engineers from top companies...",
            url: "https://fellowship.mlh.io/",
            timeline: "May - Aug & Jun - Sep",
            reward: "up to $5000"
        },
        {
            name: "XROS Fellowship",
            content: "The XROS Fellowship Program supports Indian XR developers [AR, VR, MR, 3D modeling, etc] throughfellowships. It is fully remote, 4 week open-source fellowship that offers stipends, mentoring by industry experts on open-source XR projects.",
            url: "",
            timeline: "https://xrosfellowship.ficci.in/",
            reward: "INR 4 Lakh"
        },
    ];

    const OpenSourceCompetitions = [
        {
            name: "Hacktoberfest",
            content: "A month-long celebration of open-source projects, their maintainers, and the entire community of contributors...",
            url: "",
            timeline: "October",
            reward: "Swag rewards"
        },
        {
            name: "Girlscript Summer of Code",
            content: "GirlScript Summer of Code is a 3-month long OpenSource program by GirlScript Foundation...",
            url: "",
            timeline: "May - August",
            reward: "3000 USD to 6600 USD"
        },
        {
            name: "Hacksquad",
            content: "Hacksquad is here to enhance your Swag, meet with more community members and participate in workshops from our great sponsors....",
            url: "https://www.hacksquad.dev/",
            timeline: "October",
            reward: "Amazing Swags rewards for Top-60 Teams"
        },
    ];

    const UniversityOpenSourceProgram = [
        {
            name: "JGEC Winter of Code",
            content: "JWoC is an open-source program organized by Developers' JGEC which helps students to plunge into Open Source contribution and get the realm of Software Development.",
            url: "https://www.jwoc.tech/",
            timeline: "Jan - Feb",
            reward: "Paid Internship Opportunities, Coupons & Free Domains, Goodies & Cool Stickers, Workshops & Masterclasses, Verified Certificates."
        },
        {
            name: "Kharagpur Winter Of Code",
            content: "Kharagpur Winter of Code is a 5-week long online program for students who are new to open source software development. The program not only helps students to get involved in open source, but also prepares them for many open source summer programs; Google Summer of Code being one of them.",
            url: "https://kwoc.kossiitkgp.org/",
            timeline: "November - February",
            reward: "Amazing Swags rewards"
        },
        {
            name: "NJACK Winter of Code",
            content: "NJACK Winter of Code is an initiative by NJACK, IIT Patna, targeted at students who have never participated in Free or Open Source Software (FOSS) development before, as well as at those who have already become an expert in Open Source Development and are currently contributing to projects of any domain, say Web, Mobile, Machine Learning, Blockchain, IoT etc. It also aims to prepare them for bigger programs and opportunities like Google Summer of Code, Outreachy etc.",
            url: "https://njackwinterofcode.github.io/",
            timeline: "December",
            reward: "Amazing Swags rewards"
        },
        {
            name: "FOSS OverFlow",
            content: "FOSS Overflow is a program by OpenLake and GDSC IIT Bhilai that helps students to get started with the world of open source by helping them build real world open sourced projects under guidance of awesome mentors.",
            url: "https://fossoverflow.dev/",
            timeline: "Dec-Feb",
            reward: "Stipend upto 10k INR, Swags & Certification."
        }
    ]

    function isValidHttpUrl(string) {
        let url;
        
        try {
          url = new URL(string);
        } catch (_) {
          return false;  
        }
      
        return url.protocol === "http:" || url.protocol === "https:";
      }

      function createGitItem(value) {
        return `
        <div class="card">
            <h3>${value.name}</h3>
            <p>${value.content}  ${isValidHttpUrl(value.url) ? `<a href="${value.url}" target="_blank">Read More</a>` : ""}</p>
            <p><strong>Timeline:</strong> ${isValidHttpUrl(value.timeline) ? `<a href="${value.timeline}" target="_blank">Visit</a>` : value.timeline}</p>
            <p><strong>Rewards:</strong> ${value.reward}</p>
        </div>
        `;
    }
    
    const dynamicSOCContainer = document.getElementById("dynamic-soc");
    const dynamicOSCContainer = document.getElementById("dynamic-osc");
    const dynamicUOSPContainer = document.getElementById("dynamic-uosp");


    SOC.forEach(value => {
        dynamicSOCContainer.innerHTML += createGitItem(value);
    });

    OpenSourceCompetitions.forEach(value => {
        dynamicOSCContainer.innerHTML += createGitItem(value);
    });

    UniversityOpenSourceProgram.forEach(value => {
        dynamicUOSPContainer.innerHTML += createGitItem(value);
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