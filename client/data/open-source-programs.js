const osp = [
  {
    title: "24 Pull Requests",
    description: "An initiative encouraging developers to send 24 pull requests during December to open-source projects. It promotes consistent contributions and highlights opportunities for beginner-friendly issues.",
    link: "https://24pullrequests.com/",
    image: "../../assets/illustration-1.png"
  },
  {
    title: "Code for Good",
    description: "An initiative by JPMorgan Chase that offers developers the chance to work on projects that help communities through technology. It includes mentorship and the opportunity to work on high-impact open-source projects.",
    link: "https://www.jpmorganchase.com/corporate/social-responsibility/code-for-good.htm",
    image: "../../assets/illustration-2.png"
  },
  {
    title: "Contribute.dev",
    description: "Provides a curated list of open-source projects with ready-to-use development environments, simplifying the onboarding process for new contributors.",
    link: "https://contribute.dev/",
    image: "../../assets/illustration-3.png"
  },
  {
    title: "Empower Open Source Software (EOSS)",
    description: "An initiative focused on creating opportunities for students, especially from underrepresented backgrounds, to contribute to open-source software development and build their portfolios.",
    link: "https://eoss.community/",
    image: "../../assets/illustration-4.png"
  },
  {
    title: "Exercism",
    description: "An online platform offering coding exercises and mentorship across 70+ programming languages, fostering open-source contributions through practice and feedback.",
    link: "https://exercism.org/",
    image: "../../assets/illustration-5.png"
  },
  {
    title: "FOSS Overflow",
    description: "A program promoting open-source contributions through mentorship, events, and coding challenges. It helps participants learn through experience and build real-world collaboration skills.",
    link: "https://fossoverflow.dev/",
    image: "../../assets/illustration-6.png"
  },
  {
    title: "FOSSASIA Codeheat",
    description: "An annual coding contest encouraging contributions to FOSSASIA open-source projects. Participants work on real issues, gain recognition, and can win prizes and certificates.",
    link: "https://codeheat.org/",
    image: "../../assets/illustration-1.png"
  },
  {
    title: "GiriScript Summer of Code (GSSoC)",
    description: "A program by GirlScript Foundation that helps students contribute to open-source projects over the summer. It provides guidance from mentors and helps build community experience.",
    link: "https://gssoc.girlscript.tech/",
    image: "../../assets/illustration-2.png"
  },
  {
    title: "GitHub Campus Experts",
    description: "A program that trains students to become leaders in their campus tech communities, promoting open-source and developer education.",
    link: "https://education.github.com/experts",
    image: "../../assets/illustration-3.png"
  },
  {
    title: "GitHub Sponsors",
    description: "A platform that allows individuals and organizations to support open-source developers directly. Developers can receive recurring financial support to help maintain and grow their projects.",
    link: "https://github.com/sponsors",
    image: "../../assets/illustration-4.png"
  },
  {
    title: "Google Season of Docs (GSoD)",
    description: "A Google program that pairs technical writers with open-source organizations to improve documentation. It aims to enhance both content quality and community participation.",
    link: "https://developers.google.com/season-of-docs",
    image: "../../assets/illustration-5.png"
  },
  {
    title: "Google Summer of Code (GSoC)",
    description: "An international program where students work on open-source projects during their summer break. Participants are mentored by experienced developers and gain real-world experience.",
    link: "https://summerofcode.withgoogle.com/",
    image: "../../assets/illustration-6.png"
  },
  {
    title: "Hacktoberfest",
    description: "A global event in October encouraging contributions to open-source projects, organized by DigitalOcean and partners. Participants can earn swag and contribute meaningfully to real projects.",
    link: "https://hacktoberfest.com/",
    image: "../../assets/illustration-1.png"
  },
  {
    title: "Hacksquad",
    description: "A month-long event where developers form teams and contribute to open-source projects together. It fosters collaboration, networking, and open-source exposure for all skill levels.",
    link: "https://www.hacksquad.dev/",
    image: "../../assets/illustration-2.png"
  },
  {
    title: "Hyperledger Mentorship Program",
    description: "A mentorship program that pairs newcomers with experienced developers to work on Hyperledger projects. It supports blockchain and enterprise-grade software development learning.",
    link: "https://wiki.hyperledger.org/display/INTERN",
    image: "../../assets/illustration-3.png"
  },
  {
    title: "Julia Seasons of Contributions (JSoC)",
    description: "A summer program encouraging contributions to the Julia programming language ecosystem. Participants work on projects with mentorship from the Julia community.",
    link: "https://julialang.org/jsoc/",
    image: "../../assets/illustration-4.png"
  },
  {
    title: "Kharagpur Winter of Code (KWoC)",
    description: "A winter mentorship program organized by IIT Kharagpur to help students contribute to open-source. It includes curated project lists, guidance, and a supportive learning environment.",
    link: "https://kwoc.kossiitkgp.org/",
    image: "../../assets/illustration-5.png"
  },
  {
    title: "Layer5 Mentorship Program",
    description: "Offers mentorship opportunities in cloud-native technologies, helping contributors engage with projects like Meshery and Service Mesh Performance.",
    link: "https://layer5.io/community/handbook/mentorship-programs",
    image: "../../assets/illustration-6.png"
  },
  {
    title: "LFN Mentorship Program",
    description: "A mentorship initiative by the Linux Foundation Networking projects to foster new contributors. It focuses on building skills and contributing to open networking technologies.",
    link: "https://wiki.lfnetworking.org/display/LN/LFN+Mentorship+Program",
    image: "../../assets/illustration-1.png"
  },
  {
    title: "LFX Mentorship Program",
    description: "An initiative by The Linux Foundation providing mentorship across various open-source projects, aiming to foster the next generation of open-source leaders.",
    link: "https://lfx.linuxfoundation.org/tools/mentorship/",
    image: "../../assets/illustration-2.png"
  },
  {
    title: "Microsoft Learn Student Ambassadors",
    description: "Empowers students to lead in their local tech communities, providing resources and support to promote technology and open-source learning.",
    link: "https://studentambassadors.microsoft.com/",
    image: "../../assets/illustration-3.png"
  },
  {
    title: "MLH Fellowship",
    description: "A remote internship alternative where students contribute to real-world projects under mentorship. Fellows work on open-source, corporate, or internal tools and get paid while learning.",
    link: "https://fellowship.mlh.io/",
    image: "../../assets/illustration-4.png"
  },
  {
    title: "Open Mainframe Project Mentorship Program",
    description: "Offers mentorship opportunities focused on mainframe technologies, aiming to engage students and newcomers in open-source mainframe projects.",
    link: "https://www.openmainframeproject.org/mentorship",
    image: "../../assets/illustration-5.png"
  },
  {
    title: "OpenMRS Outreach Program",
    description: "A program designed to help students and new contributors get involved in the OpenMRS open-source project. It offers mentorship and training in healthcare software development.",
    link: "https://om.rs/community/",
    image: "../../assets/illustration-6.png"
  },
  {
    title: "OSS World Challenge",
    description: "A global competition promoting open-source software development, offering cash prizes to outstanding projects and contributors.",
    link: "https://www.oss.kr/en/page/ossworldchallenge",
    image: "../../assets/illustration-1.png"
  },
  {
    title: "Outreachy",
    description: "A program that provides paid internships to underrepresented groups in tech, focusing on open-source contributions. It supports diversity and skill development across global communities.",
    link: "https://www.outreachy.org/",
    image: "../../assets/illustration-2.png"
  },
  {
    title: "Red Hat Open Source Contest",
    description: "An annual contest by Red Hat that encourages students to contribute to open-source projects, with opportunities to win prizes and gain recognition.",
    link: "https://www.redhat.com/en/about/open-source-contest",
    image: "../../assets/illustration-3.png"
  },
  {
    title: "Season of KDE",
    description: "A program to help newcomers contribute to KDE projects through mentorship during the winter. Participants collaborate on various KDE software and documentation improvements.",
    link: "https://season.kde.org/",
    image: "../../assets/illustration-4.png"
  },
  {
    title: "Summer of Bitcoin",
    description: "A global summer internship program introducing university students to Bitcoin and open-source development, offering mentorship and stipends.",
    link: "https://summerofbitcoin.org/",
    image: "../../assets/illustration-5.png"
  },
  {
    title: "Turing 100",
    description: "A mentorship program providing young women and underrepresented groups with a platform to develop technical skills by contributing to open-source projects. It includes virtual mentoring and exposure to the tech industry.",
    link: "https://www.turing.com/100",
    image: "../../assets/illustration-6.png"
  }
];

export { osp };