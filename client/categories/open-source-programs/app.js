import { osp } from "../../data/open-source-programs.js";

const resourcesContainer = document.querySelector(".resources-container");
const categoriesContainer = document.querySelector(".categories-container");

function resourceCard(resource) {
  resourcesContainer.innerHTML += `<div class="resource-card">
                                     <div class="resource-img">
                                       <img src="${resource.image}" alt="Resource Image">
                                     </div>
                                    
                                     <div class="resource-info">
                                       <h3 class="resource-title">${resource.title}</h3>
                                       <p class="resource-publisher">${resource.description}</p>
                                       <a href="${resource.link}" class="resource-link" target="_blank">Read Article</a>
                                     </div>      
                                   </div>`;
};

osp.forEach(resourceCard);

categoriesContainer.innerHTML = `<div class="category-card">
                                   <h3 class="category-title">Introduction to Open Source</h3>

                                   <div class="category-info">
                                     <p class="category-description">This category provides a carefully curated selection of invaluable resources designed to help you navigate and understand the open source ecosystem.</p>
                                     <a href="https://openpedia.netlify.app/categories/learn-git-and-github/" class="category-link" target="_blank">Explore</a>
                                   </div>
                                 </div>

                                  <div class="category-card">
                                   <h3 class="category-title">Learn Git and GitHub</h3>

                                   <div class="category-info">
                                     <p class="category-description">This category offers a selection of key resources aimed at helping you master Git and GitHub, two of the most essential tools for contributing to open-source projects.</p>
                                     <a href="https://openpedia.netlify.app/categories/learn-git-and-github/" class="category-link" target="_blank">Explore</a>
                                   </div>
                                 </div>

                                 <div class="category-card">
                                   <h3 class="category-title">Contributing to Open Source</h3>

                                   <div class="category-info">
                                     <p class="category-description">This category features a comprehensive collection of practical resources that outline the step-by-step workflow involved in contributing to open-source projects.</p>
                                     <a href="https://openpedia.netlify.app/categories/learn-git-and-github/" class="category-link" target="_blank">Explore</a>
                                   </div>
                                 </div>

                                 <div class="category-card">
                                   <h3 class="category-title">Beginner-Friendly Repositories</h3>

                                   <div class="category-info">
                                     <p class="category-description">This category highlights a variety of active beginner-friendly repositories specifically chosen to help newcomers take their first steps into the world of open source contributions.</p>
                                     <a href="https://openpedia.netlify.app/categories/learn-git-and-github/" class="category-link" target="_blank">Explore</a>
                                   </div>
                                 </div>`;