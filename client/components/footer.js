const footer = document.createElement("footer");

footer.innerHTML = `<div class="contain">
                      <div class="row">
                        <div class="col">
                          <img src="https://raw.githubusercontent.com/Sriparno08/Openpedia/main/client/assets/long-logo.png" alt="Openpedia">
                        </div>

                        <div class="col">
                          <h3>Categories</h3>
                          <p><a href="./pages/introduction-to-open-source/index.html" class="footer-links">Introduction to Open Source</a></p>
                          <p><a href="./pages/learn-git-and-github/index.html" class="footer-links">Learn Git & GitHub</a></p>
                          <p><a href="./pages/contributing-to-open-source/index.html" class="footer-links">Contributing to Open Source</a></p>
                          <p><a href="./pages/beginner-friendly-repos/index.html" class="footer-links">Beginner-Friendly Repos</a></p>
                          <p><a href="./pages/open-source-programs/index.html" class="footer-links">Open Source Programs</a></p>
                        </div>  
                      
                        <div class="col">
                          <h3>Support</h3>
                          <p><a href="#about" class="footer-links">About</a></p>
                          <p><a href="https://github.com/Sriparno08/Openpedia" class="footer-links">Documentation</a></p>
                          <p><a href="./pages/frequently-asked-questions/index.html" class="footer-links">Frequently Asked Questions</a>
                          </p>
                        </div>

                        <div class="col">
                          <h3>Social Links</h3>
                          <p><a href="https://www.linkedin.com/in/sriparnoroy/" class="footer-links">LinkedIn</a></p>
                          <p><a href="https://github.com/Sriparno08" class="footer-links">GitHub</a></p>
                        </div>
                      </div>

                      <div class="end">
                        <span class="copyright">&copy; 2024 Openpedia</span>
                        <span class="creator">Developed By Sriparno Roy & Open Source Community</span>
                      </div>
                    </div>`;

container.append(footer);
