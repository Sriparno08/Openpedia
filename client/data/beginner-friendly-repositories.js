const bfr = [
  {
    title: "Algolia",
    description: "A search and discovery API for developing powerful search functionalities in applications. It enables fast, relevant, and customizable search experiences.",
    link: "https://github.com/algolia/algoliasearch-client-javascript",
    image: "../../assets/illustration-1.png"
  },
  {
    title: "Angular",
    description: "A platform and framework for building single-page client applications using HTML and TypeScript. It offers a powerful CLI, component-based architecture, and tools for building scalable web apps.",
    link: "https://github.com/angular/angular",
    image: "../../assets/illustration-2.png"
  },
  {
    title: "Apache Arrow",
    description: "A cross-language development platform for in-memory data designed to accelerate big data processing. It enables efficient columnar data format and fast analytics in various languages.",
    link: "https://github.com/apache/arrow",
    image: "../../assets/illustration-3.png"
  },
  {
    title: "Awesome React",
    description: "A curated list of awesome React resources, libraries, and tools. It includes learning materials, frameworks, and components to accelerate React development.",
    link: "https://github.com/enaqx/awesome-react",
    image: "../../assets/illustration-4.png"
  },
  {
    title: "balenaCloud Docs",
    description: "Documentation for balenaCloud, a platform to deploy and manage fleets of connected devices. It supports IoT development with device provisioning, updates, and monitoring.",
    link: "https://github.com/balena-io/docs",
    image: "../../assets/illustration-5.png"
  },
  {
    title: "Basic Attention Token",
    description: "A cryptocurrency that powers a new decentralized digital advertising ecosystem. It ensures privacy by blocking ads and trackers while enabling better targeting.",
    link: "https://github.com/brave/brave-browser",
    image: "../../assets/illustration-6.png"
  },
  {
    title: "Bootstrap",
    description: "A popular front-end framework for developing responsive and mobile-first websites. It provides ready-made components and utilities for fast UI development.",
    link: "https://github.com/twbs/bootstrap",
    image: "../../assets/illustration-1.png"
  },
  {
    title: "CheatSheetJS",
    description: "A collection of useful JavaScript snippets and cheat sheets for developers, designed to provide quick references for common tasks.",
    link: "https://github.com/ryanmcdermott/cheatsheetjs",
    image: "../../assets/illustration-2.png"
  },
  {
    title: "Codecademy Docs",
    description: "Open-contribution docs for coding concepts, languages, and frameworks. Designed to support learners with concise, community-driven technical explanations.",
    link: "https://github.com/Codecademy/docs",
    image: "../../assets/illustration-3.png"
  },
  {
    title: "Data Science",
    description: "A comprehensive collection of learning resources for Data Science, including tutorials, articles, and coding challenges for beginners to experts.",
    link: "https://github.com/data-science-at-berkeley/data-science-101",
    image: "../../assets/illustration-4.png"
  },
  {
    title: "Docusaurus",
    description: "A tool for building optimized websites quickly, focused on documentation. It supports versioning, markdown content, and React components out-of-the-box.",
    link: "https://github.com/facebook/docusaurus",
    image: "../../assets/illustration-5.png"
  },
  {
    title: "First Contributions",
    description: "A project to simplify and guide the way beginners make their first open-source contribution. It includes tutorials, repositories, and community support.",
    link: "https://github.com/firstcontributions/first-contributions",
    image: "../../assets/illustration-6.png"
  },
  {
    title: "Flask",
    description: "A micro web framework for Python based on WSGI. It’s lightweight and modular, making it adaptable for building modern web applications.",
    link: "https://github.com/pallets/flask",
    image: "../../assets/illustration-1.png"
  },
  {
    title: "Flutter",
    description: "Google’s UI toolkit for building natively compiled applications for mobile, web, and desktop. It uses Dart and provides a fast development cycle with hot reload.",
    link: "https://github.com/flutter/flutter",
    image: "../../assets/illustration-2.png"
  },
  {
    title: "freeCodeCamp",
    description: "A nonprofit community that helps people learn to code through coding challenges and projects. It offers thousands of hours of free content in multiple disciplines.",
    link: "https://github.com/freeCodeCamp/freeCodeCamp",
    image: "../../assets/illustration-3.png"
  },
  {
    title: "GitHub Docs",
    description: "Documentation for GitHub, covering features, API references, and guides. It helps developers understand GitHub’s ecosystem for collaboration and development.",
    link: "https://github.com/github/docs",
    image: "../../assets/illustration-4.png"
  },
  {
    title: "Grafana Alloy",
    description: "A lightweight, open-source telemetry agent built by the Grafana Labs team. It collects and ships metrics, logs, and traces to observability platforms.",
    link: "https://github.com/grafana/alloy",
    image: "../../assets/illustration-5.png"
  },
  {
    title: "Jest",
    description: "A delightful JavaScript testing framework with a focus on simplicity. It provides a zero-config setup and powerful mocking capabilities.",
    link: "https://github.com/facebook/jest",
    image: "../../assets/illustration-6.png"
  },
  {
    title: "KubeArmor",
    description: "A runtime security enforcement system for Kubernetes workloads. It enables observability and policy enforcement to secure containers and VMs.",
    link: "https://github.com/kubearmor/KubeArmor",
    image: "../../assets/illustration-1.png"
  },
  {
    title: "MatrixOne",
    description: "An open-source, cloud-native, distributed database for transactional and analytical workloads. It is designed for high availability and performance.",
    link: "https://github.com/matrixorigin/matrixone",
    image: "../../assets/illustration-2.png"
  },
  {
    title: "MDN Web Docs",
    description: "Comprehensive documentation for web standards like HTML, CSS, and JavaScript maintained by Mozilla. It's a trusted source for web developers worldwide.",
    link: "https://github.com/mdn/content",
    image: "../../assets/illustration-3.png"
  },
  {
    title: "MindsDB",
    description: "An open-source platform that makes databases machine learning-native. It lets users train and deploy ML models directly inside databases using SQL.",
    link: "https://github.com/mindsdb/mindsdb",
    image: "../../assets/illustration-4.png"
  },
  {
    title: "Novu",
    description: "An open-source notification infrastructure for developers to manage product notifications easily. It supports channels like email, SMS, and push notifications.",
    link: "https://github.com/novuhq/novu",
    image: "../../assets/illustration-5.png"
  },
  {
    title: "Prettier",
    description: "An opinionated code formatter that supports many languages and integrates with most editors. It enforces consistent style by parsing and reprinting code.",
    link: "https://github.com/prettier/prettier",
    image: "../../assets/illustration-6.png"
  },
  {
    title: "React",
    description: "A JavaScript library for building user interfaces, maintained by Facebook. It enables component-based architecture and efficient UI updates via a virtual DOM.",
    link: "https://github.com/facebook/react",
    image: "../../assets/illustration-1.png"
  },
  {
    title: "React Native",
    description: "A framework for building native mobile apps using React. It allows code sharing across iOS and Android platforms with native performance.",
    link: "https://github.com/facebook/react-native",
    image: "../../assets/illustration-2.png"
  },
  {
    title: "Storybook",
    description: "An open-source tool for building UI components and pages in isolation. It helps in developing, testing, and documenting components efficiently.",
    link: "https://github.com/storybookjs/storybook",
    image: "../../assets/illustration-3.png"
  },
  {
    title: "Svelte",
    description: "A framework for building user interfaces with a focus on simplicity and performance. It compiles components into highly optimized vanilla JavaScript at build time.",
    link: "https://github.com/sveltejs/svelte",
    image: "../../assets/illustration-4.png"
  },
  {
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development. It enables creating custom designs without having to leave the HTML code.",
    link: "https://github.com/tailwindlabs/tailwindcss",
    image: "../../assets/illustration-5.png"
  },
  {
    title: "Vue.js",
    description: "A progressive JavaScript framework for building user interfaces. It allows for incremental adoption, making it suitable for both small and large applications.",
    link: "https://github.com/vuejs/vue",
    image: "../../assets/illustration-6.png"
  }
];

export { bfr };