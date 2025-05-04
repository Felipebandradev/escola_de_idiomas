import { criandoElemento, criandoNavbar } from "../utilitarios.js";

import idiomas from "../idiomas.js";

// Função para desenhar a página
function renderPage(page) {
  document.body.innerHTML = "";

  const header = criandoElemento("header");
  const h2 = criandoElemento("h2", "", idiomas[page].title);

  // Função para adicionar o elemento dentro de outro elemento
  // No caso está colocando o <h1></h1> dentro do <header></header>
  header.appendChild(h2);

  // Chamando a função criandoNavbar
  const nav = criandoNavbar(idiomas.home.links);

  const main = criandoElemento("main");
  const p = criandoElemento("p", "", idiomas[page].description);
  main.appendChild(p);

  if (page !== "home") {
    const imgTour = criandoElemento("img");
    imgTour.src = idiomas[page].imgTour;
    imgTour.alt = "Ponto turístico";

    const imgFlag = criandoElemento("img");
    imgFlag.src = idiomas[page].imgFlag;
    imgFlag.alt = "Bandeira";

    main.appendChild(imgTour);
    main.appendChild(imgFlag);
  }

  const footer = criandoElemento("footer");
  footer.textContent = "© 2024 Curso de Idiomas Exemplo";

  // Adicionando os elementos no corpo da página
  document.body.appendChild(header);
  document.body.appendChild(nav);
  document.body.appendChild(main);
  document.body.appendChild(footer);
}

// Controlar mudança de página
function navigate() {
  const hash = window.location.hash.substring(1);
  const page = hash && idiomas[hash] ? hash : "home";
  renderPage(page);
}

window.addEventListener("hashchange", navigate);
window.addEventListener("load", navigate);
