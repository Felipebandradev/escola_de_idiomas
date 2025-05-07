import { criandoElemento, criandoMenu } from "../utilitarios.js";

// Função para desenhar a página
function renderPage(page) {
  document.body.innerHTML = "";

  const tituloPagina = criandoElemento("div", "text-center");
  const h2 = criandoElemento("h2", "p-2", "Boas vindas a Cursos");

  // Função para adicionar o elemento dentro de outro elemento
  // No caso está colocando o <h1></h1> dentro do <header></header>
  tituloPagina.appendChild(h2);

  const cabecalho = criandoMenu();

  const main = criandoElemento("main");
  const p = criandoElemento(
    "p",
    "text-sm-start text-wrap fw-semibold",
    "A LínguaNova é uma escola de idiomas dedicada a oferecer cursos de alta qualidade para todas as idades e níveis. Com uma equipe de professores experientes e metodologias inovadoras, o ambiente é acolhedor e ideal para quem busca aprender uma nova língua de forma prática e eficiente. Venha conhecer e ampliar seus horizontes culturais e profissionais!"
  );
  main.appendChild(p);

  // Tabela de cursos
  const containerTabela = criandoElemento("div", "");

  containerTabela.innerHTML = `
     <table class="table m-2 p-2">
            <tr>
              <th class="col">Nome do Cursos</th>
              <th class="col">Foto do País</th>
              <th class="col">Duração</th>
              <th class="col">Mensalidade</th>
            </tr>
                <tr>
                    <td>Inglês</td>
                    <td><img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="Bandeira da Ingleterra" /></td>
                    <td>2 anos</td>
                    <td><a href="contato.html">R$ 250,00</a></td>
                </tr> 
                <tr>
                    <td>Francês</td>
                    <td><img src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" alt="Bandeira da França" /></td>
                    <td>3 anos</td>
                    <td><a href="contato.html">R$ 350,00</a></td>
                </tr> 
           
                <tr>
                    <td>Japones</td>
                    <td><img src="https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" alt="Bandeira do Japão" /></td>
                    <td>2 anos</td>
                    <td><a href="contato.html">R$ 250,00</a></td>
                </tr> 
                <tr>
                    <td>Alemão</td>
                    <td><img src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" alt="Bandeira da Alemanha" /></td>
                    <td>6 anos</td>
                    <td><a href="contato.html">R$ 600,00</a></td>
                </tr> 
                <tr>
                    <td>Espanhol</td>
                    <td><img src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg" alt="Bandeira da Espanha" /></td>
                    <td>1 anos</td>
                    <td><a href="contato.html">R$450,00</a></td>
                </tr> 
                <tr>
                    <td>Italiano</td>
                    <td><img src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" alt="Bandeira da Ingleterra" /></td>
                    <td>3 anos</td>
                    <td><a href="contato.html">R$ 300,00</a></td>
                </tr> 
          </table>
  `;

  main.appendChild(containerTabela);

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
  const page = "cursos";
  renderPage(page);
}
window.addEventListener("hashchange", navigate);
window.addEventListener("load", navigate);
