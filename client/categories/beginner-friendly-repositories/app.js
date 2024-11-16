import { webDevRepositories, jsLibAndFrameworks, machineLearningAndAI, BioInformatics, CrossPlatformAppDevelopment } from "../../data/beginner-friendly-repositories.js";

function renderCards() {
  let container = document.querySelector("#web-dev-repositories");
  webDevRepositories.forEach((repo) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${repo.title}</h3>
        <p>${repo.description}</p>
        <div class="button-container">
         <button class="btn"><a href="${repo.url}" target="_blank">Read More<i class="bi bi-box-arrow-up-right"></i></a></button>
        </div>
      `;
    container.appendChild(card);
  });

  container = document.querySelector("#js-libs-frameworks");
  jsLibAndFrameworks.forEach((repo) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${repo.title}</h3>
        <p>${repo.description}</p>
        <div class="button-container">
         <button class="btn"><a href="${repo.url}" target="_blank">Read More<i class="bi bi-box-arrow-up-right"></i></a></button>
        </div>
      `;
    container.appendChild(card);
  });

  container = document.querySelector("#machine-learning-and-ai");
  machineLearningAndAI.forEach((repo) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${repo.title}</h3>
        <p>${repo.description}</p>
        <div class="button-container">
         <button class="btn"><a href="${repo.url}" target="_blank">Read More<i class="bi bi-box-arrow-up-right"></i></a></button>
        </div>
      `;
    container.appendChild(card);
  });

  container = document.querySelector("#bioinformatics");
  BioInformatics.forEach((repo) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${repo.title}</h3>
        <p>${repo.description}</p>
        <div class="button-container">
         <button class="btn"><a href="${repo.url}" target="_blank">Read More<i class="bi bi-box-arrow-up-right"></i></a></button>
        </div>
      `;
    container.appendChild(card);
  });

  container = document.querySelector("#Cross-platform-app-development");
  CrossPlatformAppDevelopment.forEach((repo) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${repo.title}</h3>
        <p>${repo.description}</p>
        <div class="button-container">
         <button class="btn"><a href="${repo.url}" target="_blank">Read More<i class="bi bi-box-arrow-up-right"></i></a></button>
        </div>
      `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderCards);