import { ctos } from "../../data/contributing-to-open-source.js";

const resourcesContainer = document.querySelector(".resources-container");
const categoriesContainer = document.querySelector(".categories-container");

function resourceCard(resource) {
  resourcesContainer.innerHTML += `<div class="resource-card">
                                     <div class="resource-image">
                                       <img src="${resource.image}" alt="Resource Image">
                                     </div>
                                    
                                     <div class="resource-info">
                                       <h3 class="resource-title">${resource.title}</h3>
                                       <p class="resource-publisher">${resource.publisher}</p>
                                       <a href="${resource.link}" class="resource-link" target="_blank">Read Article <i class="fa fa-external-link" aria-hidden="true"></i></a>
                                     </div>      
                                   </div>`;
};

ctos.forEach(resourceCard);

categoriesContainer.innerHTML = `<div class="category-card">
                                   <div class="category-image">
                                     <img src="../../assets/illustration-1.png" alt="Category Image">
                                   </div>

                                   <h3 class="category-title">Introduction to Open Source</h3>

                                   <div class="category-info">
                                     <p class="category-description">This category provides a carefully curated selection of invaluable resources designed to help you navigate and understand the open source ecosystem.</p>
                                     <a href="../introduction-to-open-source/index.html" class="category-link" target="_blank">Explore <i class="fa fa-external-link" aria-hidden="true"></i></a>
                                   </div>
                                 </div>

                                 <div class="category-card">
                                   <div class="category-image">
                                     <img src="../../assets/illustration-2.png" alt="Category Image">
                                   </div>

                                   <h3 class="category-title">Learn Git and GitHub</h3>

                                   <div class="category-info">
                                     <p class="category-description">This category offers a selection of key resources aimed at helping you master Git and GitHub, two of the most essential tools for contributing to open-source projects.</p>
                                     <a href="../learn-git-and-github/index.html" class="category-link" target="_blank">Explore <i class="fa fa-external-link" aria-hidden="true"></i></a>
                                   </div>
                                 </div>

                                 <div class="category-card">
                                   <div class="category-image">
                                     <img src="../../assets/illustration-4.png" alt="Category Image">
                                   </div>

                                   <h3 class="category-title">Beginner-Friendly Repositories</h3>

                                   <div class="category-info">
                                     <p class="category-description">This category highlights a variety of active beginner-friendly repositories specifically chosen to help newcomers take their first steps into the world of open-source contributions.</p>
                                     <a href="../beginner-friendly-repositories/index.html" class="category-link" target="_blank">Explore <i class="fa fa-external-link" aria-hidden="true"></i></a>
                                   </div>
                                 </div>
                                 
                                 <div class="category-card">
                                   <div class="category-image">
                                     <img src="../../assets/illustration-5.png" alt="Category Image">
                                   </div>

                                   <h3 class="category-title">Open Source Programs</h3>

                                   <div class="category-info">
                                     <p class="category-description">This category showcases a range of exciting open source programs that not only help you develop valuable skills but also offer mentorship and rewards for your contributions.</p>
                                     <a href="../open-source-programs/index.html" class="category-link" target="_blank">Explore <i class="fa fa-external-link" aria-hidden="true"></i></a>
                                   </div>
                                 </div>`;