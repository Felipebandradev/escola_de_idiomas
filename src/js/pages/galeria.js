import { criandoElemento, criandoMenu, criarGaleria } from "../utilitarios.js";

// Função para desenhar a página
function renderPage(page) {
  document.body.innerHTML = "";

  const tituloPagina = criandoElemento("div", "text-center");
  const h2 = criandoElemento("h2", "p-2", "Boas vindas a Galeria");

  // Função para adicionar o elemento dentro de outro elemento
  // No caso está colocando o <h1></h1> dentro do <header></header>
  tituloPagina.appendChild(h2);

  const cabecalho = criandoMenu();

  const main = criandoElemento("main");
  const p = criandoElemento(
    "p",
    "text-sm-center text-wrap fw-semibold",
    "Veja alguns locais que você poderá conhecer se aprender novasLinguas"
  );
  main.appendChild(p);

  // Galeria
  const galeria = criarGaleria();

  main.appendChild(galeria);

  const footer = criandoElemento("footer", "text-center");
  footer.textContent = "© 2024 Curso de Idiomas LinguaNova";

  // Adicionando os elementos no corpo da página
  document.body.appendChild(cabecalho);
  document.body.appendChild(tituloPagina);
  document.body.appendChild(main);
  document.body.appendChild(footer);
}

// Controlar mudança de página
function navigate() {
  const page = "galeria";
  renderPage(page);
}
window.addEventListener("hashchange", navigate);
window.addEventListener("load", navigate);
