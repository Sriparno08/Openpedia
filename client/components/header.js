const container = document.querySelector(".container");
const header = document.createElement("header");

header.innerHTML = `<div class="title-container">
                      <a href="/">
                        <img src="https://raw.githubusercontent.com/Sriparno08/Openpedia/561ac69fe51a0c328029ae25ec0a13b43386fcbe/client/assets/long-logo.svg" alt="Openpedia">
                      </a>
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
