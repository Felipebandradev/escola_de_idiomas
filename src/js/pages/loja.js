import { produtos } from "../arrays/produtos.js";
import { criandoElemento, criandoMenu, cardProdutos } from "../utilitarios.js";

// Função para desenhar a página
function renderPage(page) {
  document.body.innerHTML = "";

  const tituloPagina = criandoElemento("div", "text-center");
  const h2 = criandoElemento("h2", "", "Boas vindas a LOJA");

  // Função para adicionar o elemento dentro de outro elemento
  // No caso está colocando o <h1></h1> dentro do <header></header>
  tituloPagina.appendChild(h2);

  const cabecalho = criandoMenu();

  const main = criandoElemento("main");
  const p = criandoElemento(
    "p",
    "text-sm-start text-wrap fw-semibold",
    "A Loja LínguaNova oferece tudo o que você precisa para acompanhar seus estudos com praticidade e estilo! Aqui você encontra uniformes, cadernos personalizados, materiais didáticos e muito mais. Tudo pensado para garantir conforto e qualidade no seu dia a dia escolar. Visite nossa loja e confira as novidades!"
  );
  main.appendChild(p);

  //  Criação dos Cards de produtos

  const cards = cardProdutos(produtos);

  main.appendChild(cards);

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
  // Hash seria a hashtag #
  const hash = window.location.hash.substring(1);
  const page = "loja";
  renderPage(page);
}
window.addEventListener("hashchange", navigate);
window.addEventListener("load", navigate);
