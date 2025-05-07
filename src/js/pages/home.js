import {
  criandoElemento,
  criandoNavbar,
  criandoMenu,
  cardProdutos,
  criarGaleria,
} from "../utilitarios.js";

// Arrays
import idiomas from "../arrays/idiomas.js";
import { produtos } from "../arrays/produtos.js";

// Função para desenhar a página
function renderPage(page) {
  document.body.innerHTML = "";

  const nomeCurso = criandoElemento("div", "text-center");
  const h2 = criandoElemento("h2", "", idiomas[page].title);

  // Função para adicionar o elemento dentro de outro elemento
  // No caso está colocando o <h1></h1> dentro do <header></header>
  nomeCurso.appendChild(h2);

  // Chamando a função criandoNavbar
  const nav = criandoNavbar(idiomas.home.links);

  const cabecalho = criandoMenu();

  const main = criandoElemento("main", "text-center");

  const p = criandoElemento(
    "p",
    "text-wrap fw-semibold",
    idiomas[page].description
  );
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

  // Galeria de países
  const tituloGaleria = criandoElemento(
    "h2",
    "text-start m-2 p-2 pintarFundo claro",
    "Galeria"
  );

  main.appendChild(tituloGaleria);

  const descGaleria = criandoElemento(
    "p",
    "text-sm-center text-wrap fw-semibold",
    "Veja alguns pontos turísticos"
  );
  main.appendChild(descGaleria);

  // Galeria
  const galeria = criarGaleria();

  main.appendChild(galeria);

  // Loja de produtos
  const tituloProdutos = criandoElemento(
    "h2",
    "text-start m-2 p-2 pintarFundo claro",
    "Produtos"
  );
  main.appendChild(tituloProdutos);

  const descLoja = criandoElemento(
    "p",
    "text-sm-start text-wrap",
    "Conheça alguns dos nossos produtos"
  );

  main.appendChild(descLoja);

  const card = cardProdutos(produtos);

  main.appendChild(card);

  const footer = criandoElemento("footer", "text-center");
  footer.textContent = "© 2024 Curso de Idiomas LinguaNova";

  // Adicionando os elementos no corpo da página
  document.body.appendChild(cabecalho);
  document.body.appendChild(nomeCurso);
  document.body.appendChild(nav);
  document.body.appendChild(main);
  document.body.appendChild(footer);
}

// Controlar mudança de página
function navigate() {
  // Hash seria a hashtag #
  const hash = window.location.hash.substring(1);
  const page = hash && idiomas[hash] ? hash : "home";
  renderPage(page);
}

window.addEventListener("hashchange", navigate);
window.addEventListener("load", navigate);
