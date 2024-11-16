const div = document.createElement("div");

div.setAttribute('id', 'rateUsOverlay');
div.classList.add('rate-us-overlay');

div.innerHTML = `<div class="rate-us-box">
                  <button class="close-button" id="closeButton">&times;</button>
                  <h2>Rate Us!</h2>
                  <p>How would you rate your experience?</p>
                  <div class="stars" id="starContainer">
                    <span class="star" data-value="1">&#9733;</span>
                    <span class="star" data-value="2">&#9733;</span>
                    <span class="star" data-value="3">&#9733;</span>
                    <span class="star" data-value="4">&#9733;</span>
                    <span class="star" data-value="5">&#9733;</span>
                  </div>
                  <button class="submit-button" id="submitButton">Submit Rating</button>
                </div>`;

container.prepend(div);