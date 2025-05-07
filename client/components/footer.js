const footer = document.createElement("footer");

footer.innerHTML = `<div class="contain">
                      <div class="row">
                        <div class="col">
                          <a href="/">
                            <img src="../../assets/long-logo.png" alt="Openpedia">
                          </a>
                        </div>

                        <div class="col">
                          <h3>Categories</h3>
                          <p><a href="/categories/introduction-to-open-source/" class="footer-links">Introduction to Open Source</a></p>
                          <p><a href="/categories/learn-git-and-github/" class="footer-links">Learn Git and GitHub</a></p>
                          <p><a href="/categories/contributing-to-open-source/" class="footer-links">Contributing to Open Source</a></p>
                          <p><a href="/categories/beginner-friendly-repositories/" class="footer-links">Beginner-Friendly Repositories</a></p>
                          <p><a href="/categories/open-source-programs/" class="footer-links">Open Source Programs</a></p>
                        </div>  
                      
                        <div class="col">
                          <h3>Support</h3>
                          <p><a href="/#about" class="footer-links">About</a></p>
                          <p><a href="https://github.com/Sriparno08/Openpedia" class="footer-links" target="_blank">Documentation</a></p>
                          </p>
                        </div>

                        <div class="col">
                          <h3>Social Links</h3>
                          <p><a href="https://www.linkedin.com/in/sriparnoroy/" class="footer-links" target="_blank">LinkedIn</a></p>
                          <p><a href="https://github.com/Sriparno08" class="footer-links" target="_blank">GitHub</a></p>
                        </div>
                      </div>

                      <div class="end">
                        <span class="copyright">&copy; 2025 Openpedia</span>
                        <span class="creator">Made With ❤️ By Sriparno Roy</span>
                      </div>
                    </div>`;

container.append(footer);
