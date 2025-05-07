const ctos = [
  {
    title: "8 Non-Code Ways to Contribute to Open Source",
    publisher: "Opensource",
    link: "https://opensource.com/life/16/1/8-ways-contribute-open-source-without-writing-code",
    image: "../../assets/illustration-1.png"
  },
  {
    title: "A Guide to Making Open-Source Contributions as a Beginner",
    publisher: "DigitalOcean",
    link: "https://www.digitalocean.com/community/tutorials/how-to-make-your-first-open-source-contribution",
    image: "../../assets/illustration-2.png"
  },
  {
    title: "Contribute to Open Source: The Right Way",
    publisher: "Twilio",
    link: "https://www.twilio.com/blog/2018/06/how-to-contribute-to-open-source-projects.html",
    image: "../../assets/illustration-3.png"
  },
  {
    title: "Contributing to Open Source for the First Time",
    publisher: "Google Developers",
    link: "https://opensource.googleblog.com/2017/07/contributing-to-open-source-for-first-time.html",
    image: "../../assets/illustration-4.png"
  },
  {
    title: "Contributing to Open Source: Getting Started",
    publisher: "GeeksforGeeks",
    link: "https://www.geeksforgeeks.org/contributing-to-open-source-getting-started/",
    image: "../../assets/illustration-5.png"
  },
  {
    title: "First Contributions: A Beginner-Friendly Guide",
    publisher: "GitHub",
    link: "https://github.com/firstcontributions/first-contributions",
    image: "../../assets/illustration-6.png"
  },
  {
    title: "First Timers Only: Get Involved in Open Source",
    publisher: "First Timers Only",
    link: "https://www.firsttimersonly.com/",
    image: "../../assets/illustration-1.png"
  },
  {
    title: "Getting Started with Contributing to Open Source",
    publisher: "Stack Overflow",
    link: "https://stackoverflow.blog/2020/08/03/getting-started-with-contributing-to-open-source/",
    image: "../../assets/illustration-2.png"
  },
  {
    title: "Hacktoberfest Beginner's Guide",
    publisher: "freeCodeCamp",
    link: "https://www.freecodecamp.org/news/hacktoberfest-beginners-guide/",
    image: "../../assets/illustration-3.png"
  },
  {
    title: "How to Contribute to Open Source",
    publisher: "GitHub",
    link: "https://opensource.guide/how-to-contribute/",
    image: "../../assets/illustration-4.png"
  },
  {
    title: "How to Contribute to Open Source on GitHub",
    publisher: "Codecademy",
    link: "https://www.codecademy.com/resources/blog/how-to-contribute-to-open-source-projects-on-github/",
    image: "../../assets/illustration-5.png"
  },
  {
    title: "How to Contribute to Open-Source Projects",
    publisher: "RubyGarage",
    link: "https://rubygarage.org/blog/how-contribute-to-open-source-projects",
    image: "../../assets/illustration-6.png"
  },
  {
    title: "How to Contribute to Open-Source Projects: A Beginner's Guide",
    publisher: "freeCodeCamp",
    link: "https://www.freecodecamp.org/news/how-to-contribute-to-open-source-projects-beginners-guide/",
    image: "../../assets/illustration-1.png"
  },
  {
    title: "How to Get into Open Source",
    publisher: "The Pragmatic Engineer",
    link: "https://blog.pragmaticengineer.com/getting-into-open-source/",
    image: "../../assets/illustration-2.png"
  },
  {
    title: "How to Get Started with Open Source",
    publisher: "HackerEarth",
    link: "https://www.hackerearth.com/getstarted-opensource/",
    image: "../../assets/illustration-3.png"
  },
  {
    title: "Open Source 101: A Beginner's Guide to Getting Started",
    publisher: "OpenSauced",
    link: "https://opensauced.pizza/docs/community-resources/open-source-101-a-beginners-guide-to-getting-started/",
    image: "../../assets/illustration-4.png"
  },
  {
    title: "Open Source Starter Guide",
    publisher: "Girls Who Code",
    link: "https://girlswhocode.com/news/girls-who-code-open-source-guide",
    image: "../../assets/illustration-5.png"
  },
  {
    title: "Open-Source Contribution Guide",
    publisher: "EddieHub",
    link: "https://github.com/EddieHubCommunity/awesome-github-profiles",
    image: "../../assets/illustration-6.png"
  },
  {
    title: "Open-Source Contributions: A Detailed Guide",
    publisher: "Testsigma",
    link: "https://testsigma.com/blog/why-how-to-contribute-to-open-source-projects/",
    image: "../../assets/illustration-1.png"
  },
  {
    title: "Open-Source Friday",
    publisher: "GitHub",
    link: "https://opensourcefriday.com/",
    image: "../../assets/illustration-2.png"
  },
  {
    title: "Open-Source Projects for Beginners",
    publisher: "Hacktoberfest",
    link: "https://hacktoberfest.com/resources/",
    image: "../../assets/illustration-3.png"
  },
  {
    title: "Step-by-Step Guide for Beginners in Open Source",
    publisher: "Real Python",
    link: "https://realpython.com/contributing-to-open-source-python/",
    image: "../../assets/illustration-4.png"
  },
  {
    title: "Step-by-Step Guide to Your First Open-Source Contribution",
    publisher: "Reddit",
    link: "https://www.reddit.com/r/learnprogramming/comments/140gdp8/a_stepbystep_for_doing_your_first_open_source/",
    image: "../../assets/illustration-5.png"
  },
  {
    title: "The Beginner's Guide to Open-Source Contributions",
    publisher: "DEV",
    link: "https://dev.to/sandrinodimattia/the-beginner-s-guide-to-open-source-contributions-3f0p",
    image: "../../assets/illustration-6.png"
  },
  {
    title: "The Easy Way to Contribute to Open Source",
    publisher: "Hashnode",
    link: "https://hashnode.com/post/the-easy-way-to-contribute-to-open-source-cl10x5hci001xhpnv8kry8ivh",
    image: "../../assets/illustration-1.png"
  },
  {
    title: "Tips for Contributing to Open Source",
    publisher: "Mozilla",
    link: "https://developer.mozilla.org/en-US/docs/MDN/Community/Contributing",
    image: "../../assets/illustration-2.png"
  },
  {
    title: "Understanding How to Contribute to Open Source",
    publisher: "Open Source Collective",
    link: "https://docs.opencollective.foundation/how-to-contribute",
    image: "../../assets/illustration-3.png"
  },
  {
    title: "What I Learned from My First Open-Source Contribution",
    publisher: "The New Stack",
    link: "https://thenewstack.io/what-i-learned-from-my-first-open-source-contribution/",
    image: "../../assets/illustration-4.png"
  },
  {
    title: "Your First Open-Source Contribution",
    publisher: "Egghead",
    link: "https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github",
    image: "../../assets/illustration-5.png"
  },
  {
    title: "Zero to Open Source Hero",
    publisher: "Hashnode",
    link: "https://hashnode.com/post/zero-to-open-source-hero-cl0zzv8zq001zn4l1b0l1fvcl",
    image: "../../assets/illustration-6.png"
  }
];

export { ctos };