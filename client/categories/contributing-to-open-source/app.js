import { contribution } from "../../data/contributing-to-open-source.js";

document.addEventListener("DOMContentLoaded", function () {
  function createContributionItem(value) {
    return `
      <div class='box1'>
        <div class='img'><img src="${value.image}" alt="" srcset=""></div>
        <div class='desc'>
          <div class='resource'>${value.resource}</div>
          <div class='publisher'><p>${value.publisher}</p></div>
          <a href="${value.url}" target="_blank">Read Article</a>
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
});