const faq = [
  {
    question: `What is Openpedia?`,
    answer:
      `Openpedia is an online platform that provides a wealth of resources to help you learn open source technologies step-by-step, empowering you to contribute to open source projects at your own pace.`,
  },
  {
    question: `Who is Openpedia for?`,
    answer:
      `Openpedia is designed for individuals who are interested in learning and contributing to open source. Whether you're a beginner or an experienced developer, Openpedia offers resources suitable for all skill levels.`,
  },
  {
    question: `Is Openpedia suitable for beginners?`,
    answer:
      `Yes, Openpedia caters to beginners by providing beginner-friendly tutorials and guides. The platform is designed to help newcomers to open source navigate the learning process with ease.`,
  },
  {
    question: `How can I get started with Openpedia?`,
    answer:
      `To get started with Openpedia, simply create an account on our website. Once registered, you can explore our collection of resources and choose the topics that interest you the most.`,
  },
  {
    question: `Are the resources on Openpedia free?`,
    answer:
      `Yes, all the resources on Openpedia are free to access. We strive to keep our platform accessible to everyone.`,
  },
  {
    question: `Can I contribute to Openpedia?`,
    answer:
      `Absolutely! Openpedia is a community-driven platform, and we welcome contributions. If you are a beginner or have expertise in open source technologies and want to share your knowledge, you can contribute by adding a feature or suggesting improvements to existing content.`,
  },
  {
    question: `How can I connect with other JWoC participants on Openpedia?`,
    answer:
      `To connect with fellow JWoC participants on Openpedia, follow these steps:<li>Join the JWoC Discord server using the following link: <a href="https://discord.gg/nsBECzTB">JWoC Discord Server</a>.<li>Navigate to the Openpedia channel within the server.<li>Introduce yourself and engage in discussions with other participants.<li>Share your experiences, ask questions, and collaborate on projects in the dedicated Openpedia channel to make the most of your JWoC journey.`,
  },
  {
    question: `Can I access Openpedia on mobile devices?`,
    answer: `Yes, Openpedia is designed to be mobile-friendly.`,
  },
  {
    question: `Do I need to have programming experience to use Openpedia?`,
    answer:
      `No prior programming experience is required. Openpedia caters to individuals with varying levels of expertise, from beginners to experienced developers.`,
  },
  {
    question:
      `What is JWoC (JGEC Winter of Code), and how is Openpedia associated with it?`,
    answer:
      `JWoC is a coding event organized by JGEC that encourages students to engage in open-source contributions and explore the field of software development. Openpedia collaborates with JWoC to provide resources and support for participants during the event.`,
  },
  {
    question:
      `Can I directly start a pull request, or do I have to be assigned to it first?`,
    answer:
      `No, first you need to be assigned the issue, then submit a pull request with respect to that issue.`,
  },
  {
    question: `How will the issues be assigned?`,
    answer:
      `Issues will be assigned on a First-Come-First-Serve basis during the coding phase. Once the Admin reviews the request, they will assign the issue to you.`,
  },
  {
    question: `How can I contact the Admin of Openpedia?`,
    answer:
      `You can contact the Admin through Discord or GitHub. Reach out to them on the JGEC Winter of Code Discord server or send them a message on GitHub if you need any help or guidance.`,
  },
];

/**
 *
 * @param {MouseEvent} e
 */

// The Function to toggle the FAQ Content
function toggleContent(e) {
  const content = e.currentTarget.faqContent;
  content.show = !content.show;

  content.style.height = content.show
    ? content.scrollHeight + 20 + `px`
    : `0px`;
  content.style.padding = content.show ? `10px 0` : `0`;

  const plus = e.currentTarget.plus;
  plus.style.transform = content.show ? `rotate(45deg)` : `none`;
}

// The Template Function for the FAQ
faq.forEach(function (item, index) {
  const faqItem = document.createElement(`div`);
  faqItem.classList.add(`faq`);
  faqItem.innerHTML = `
        <div class="faq_title">
            <span>${item.question}</span>
            <div class="plusBtn">
              <svg
              class="plus"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0a.75.75 0 01.75.75v6.5h6.5a.75.75 0 010 1.5h-6.5v6.5a.75.75 0 01-1.5 0v-6.5H.75a.75.75 0 010-1.5h6.5V.75A.75.75 0 018 0z"
                />
              </svg>
            <div>
        </div>
    `;

  faqItem.plus = faqItem.querySelector(`.plus`)

  const faqContent = document.createElement(`div`);
  faqContent.classList.add(`faq_content`);
  faqContent.innerHTML = item.answer;
  faqItem.appendChild(faqContent);

  faqItem.faqContent = faqContent;

  faqItem.addEventListener(`click`, toggleContent);
  document.querySelectorAll(`.faqs_container`)[index % 2].appendChild(faqItem);
});