import { webDevRepositories, jsLibAndFrameworks, machineLearningAndAI, BioInformatics } from "./RepositoriesData.js";

function renderCards() {
  let container = document.querySelector("#web-dev-repositories");
  webDevRepositories.forEach((repo) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${repo.title}</h3>
        <p>${repo.description} <a href="${repo.url}">Read More</a></p>
      `;
    container.appendChild(card);
  });

  container = document.querySelector("#js-libs-frameworks");
  jsLibAndFrameworks.forEach((repo) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${repo.title}</h3>
        <p>${repo.description} <a href="${repo.url}">Read More</a></p>
      `;
    container.appendChild(card);
  });

  container = document.querySelector("#machine-learning-and-ai");
  machineLearningAndAI.forEach((repo) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${repo.title}</h3>
        <p>${repo.description} <a href="${repo.url}">Read More</a></p>
      `;
    container.appendChild(card);
  });

  container = document.querySelector("#bioinformatics");
  BioInformatics.forEach((repo) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${repo.title}</h3>
        <p>${repo.description} <a href="${repo.url}">Read More</a></p>
      `;
    container.appendChild(card);
  });

}

document.addEventListener("DOMContentLoaded", renderCards);
