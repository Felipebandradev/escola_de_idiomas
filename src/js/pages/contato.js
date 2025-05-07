import { criandoElemento, criandoMenu } from "../utilitarios.js";

// Função para desenhar a página
function renderPage(page) {
  document.body.innerHTML = "";

  const tituloPagina = criandoElemento("div", "text-center");
  const h2 = criandoElemento("h2", "p-2", "Contato");

  // Função para adicionar o elemento dentro de outro elemento
  // No caso está colocando o <h1></h1> dentro do <header></header>
  tituloPagina.appendChild(h2);

  const cabecalho = criandoMenu();

  const main = criandoElemento("main");
  const p = criandoElemento(
    "p",
    "text-sm-start text-wrap fw-semibold",
    "Entre em contato com a gente para comerçar a fazer os cursos ou tirar as dúvidas"
  );

  main.appendChild(p);
  // Container Sobre nós
  const container = criandoElemento("div", "container");

  container.innerHTML = `

    <div class="row">
      <img src="src/images/outdoor.jpg" style="width: 450px;" class="col" alt="outdoor da LinguaNova" />

      <form class="col" action="">

        <div class="mb-3">
          <label for="nome" class="form-label">Nome:</label>
         <input type="text" class="form-control" placeholder="Nome da silva" id="nome" aria-label="Nome">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" class="form-control" id="email" placeholder="nome@exemplo.com.br">
        </div>
        <div class="mb-3">
          <label for="motivoDoContato" class="form-label">Motivo do Contato</label>
          <textarea class="form-control" id="motivoDoContato" rows="3"></textarea>
        </div>

        <div>
          <button type="submit" class="btn pintaBtn">Enviar</button>
        </div>

      </form>
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
  const page = "contato";
  renderPage(page);
}
window.addEventListener("hashchange", navigate);
window.addEventListener("load", navigate);
