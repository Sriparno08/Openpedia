const container = document.querySelector(".container");
const header = document.createElement("header");

header.innerHTML = `<div class="title-container">
                      <img src="https://raw.githubusercontent.com/Sriparno08/Openpedia/ee35e33b2471da77ec61c9b12cad57e61412b611/client/assets/long-logo.svg" alt="Openpedia">
                    </div>

                    <div class="elemContainer">
                      <div id="themeBody">
                        <button id="themeToggle">
                          <i class="fas fa-sun"></i>
                          <i class="fas fa-moon"></i>
                        </button>
                      </div>

                      <ul class="links">
                        <li class="item">
                          <i><a href="https://github.com/Sriparno08/Openpedia" class="fa-brands fa-github"></a></i>
                        </li>
                      </ul>
                    </div>`;

container.prepend(header);