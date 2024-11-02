import { SOC, OpenSourceCompetitions, UniversityOpenSourceProgram } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
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
            <p>${value.content
      }  ${isValidHttpUrl(value.url) ? `<a href="${value.url}" target="_blank">Read More</a>` : ""}</p>
            <p><strong>Timeline:</strong> ${isValidHttpUrl(value.timeline)
        ? `<a href="${value.timeline}" target="_blank">Visit</a>`
        : value.timeline
      }</p>
            <p><strong>Rewards:</strong> ${value.reward}</p>
        </div>
        `;
  }

  const dynamicSOCContainer = document.getElementById("dynamic-soc");
  const dynamicOSCContainer = document.getElementById("dynamic-osc");
  const dynamicUOSPContainer = document.getElementById("dynamic-uosp");

  SOC.forEach((value) => {
    dynamicSOCContainer.innerHTML += createGitItem(value);
  });

  OpenSourceCompetitions.forEach((value) => {
    dynamicOSCContainer.innerHTML += createGitItem(value);
  });

  UniversityOpenSourceProgram.forEach((value) => {
    dynamicUOSPContainer.innerHTML += createGitItem(value);
  });
});