const a = document.createElement("a");

a.setAttribute('href', '#');
a.classList.add('to-top');

a.innerHTML = `<i class="fas fa-chevron-up"></i>`;

container.append(a);