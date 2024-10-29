import { faq } from "./data.js";

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