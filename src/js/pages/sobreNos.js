import { criandoElemento, criandoMenu } from "../utilitarios.js";

// Função para desenhar a página
function renderPage(page) {
  document.body.innerHTML = "";

  const tituloPagina = criandoElemento("div", "text-center");
  const h2 = criandoElemento("h2", "p-2", "Sobre nós");

  // Função para adicionar o elemento dentro de outro elemento
  // No caso está colocando o <h1></h1> dentro do <header></header>
  tituloPagina.appendChild(h2);

  const cabecalho = criandoMenu();

  const main = criandoElemento("main");
  const p = criandoElemento(
    "p",
    "text-sm-start text-wrap fw-semibold",
    "Bem-vindos à LínguaNova, sua parceira no aprendizado de idiomas! Nossa missão é transformar o estudo de línguas em uma experiência prática, envolvente e eficaz. Oferecemos cursos dinâmicos para todas as idades e níveis, com professores qualificados e metodologias modernas. Venha descobrir novas culturas, ampliar seus horizontes e alcançar seus objetivos com a LínguaNova!"
  );

  main.appendChild(p);
  // Container Sobre nós
  const container = criandoElemento("div", "container");

  container.innerHTML = `

    <div class="row">
      <img src="src/images/logo.jpg" class="col" alt="logo da LinguaNova" />

      <p class=" col">
        Na LínguaNova, acreditamos que aprender um novo idioma é abrir portas para o mundo. Fundada com a missão de oferecer ensino de qualidade, nossa escola combina metodologias modernas com um ambiente acolhedor e dinâmico. Atendemos alunos de todas as idades e níveis, sempre com foco na comunicação prática e no desenvolvimento cultural.

        Nossa equipe é formada por professores qualificados e apaixonados pelo que fazem, garantindo aulas envolventes e resultados reais. Além disso, buscamos inovar continuamente para que nossos alunos tenham a melhor experiência de aprendizado possível.

        Na LínguaNova, mais do que ensinar idiomas, ajudamos a construir conexões e transformar vidas.
      </p>
    </div>
  `;

  main.appendChild(container);

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
  const page = "sobre_nos";
  renderPage(page);
}
window.addEventListener("hashchange", navigate);
window.addEventListener("load", navigate);
