// Funções para criação de elementos
export function criandoElemento(tag, className, textContent) {
  const elemento = document.createElement(tag);
  if (className) elemento.className = className;
  if (textContent) elemento.textContent = textContent;
  return elemento;
}

// Função  para criar o navbar de links
export function criandoNavbar(links) {
  // Criando uma pequena navbar com os botôes
  const nav = criandoElemento(
    "nav",
    "margemCima d-inline-flex  flex-wrap justify-content-center p-2"
  );

  links.forEach((idioma) => {
    const link = criandoElemento(
      "a",
      "pintaBtn",
      idioma.charAt(0).toUpperCase() + idioma.slice(1)
    );
    link.href = "#" + idioma;
    nav.appendChild(link);
  });

  return nav;
}

// Criando menu de páginas
export function criandoMenu() {
  // Criando a tag html
  const header = criandoElemento("header");

  const icone = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>`;

  header.innerHTML = `

            <nav class="navbar navbar-expand-lg pintarFundo">
                <div class="container-fluid">
                    <h1>
                    <a class="navbar-brand text-light" href="index.html">
                        <img class=" iconLogo" src="src/images/favicon.png" alt="LogoKinguaNova">LinguaNova</a>
                    </h1>
                        <button class="navbar-toggler claro text-light" type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            ${icone}
                        </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                    <div class="offcanvas-body">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link pintaBtn text-light"  href="index.html ">
                                HOME
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link pintaBtn text-light"  href="cursos.html ">
                                CURSOS
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link pintaBtn text-light"  href="galeria.html ">
                                GALERIA
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link pintaBtn text-light"  href="loja.html ">
                                LOJA
                            </a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link pintaBtn text-light"  href="sobre_nos.html
                        ">SOBRE NÓS</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link pintaBtn text-light"  href="contato.html
                        ">CONTATO</a>
                        </li>
                       
                    </ul>
                    </div>
                </div>
            </nav>
        
    `;

  return header;
}

//  Criação dos Cards de produtos

export function cardProdutos(arrayProdutos) {
  // Criando o conteiner onde serão inseridos os card

  const div = criandoElemento("div", "d-flex justify-content-around flex-wrap");

  // Criação e injerção dos cards

  arrayProdutos.map((produto) => {
    div.innerHTML += `
            <div class="card p-2">
                <img src=${produto.foto} class="card-img-top" alt=${produto.descImg}>
                <div class="card-body">
                    <p class="card-text"> ${produto.descricao}</p>
                </div>
            </div>
        `;
  });

  return div;
}

// Criando a galeria
export function criarGaleria() {
  // Criando o container
  const container = criandoElemento("div", "container text-center");

  container.innerHTML = `
    
    <div class="row">
            <div class="col">
                <img src="src/images/pontosTuristicos/coliseuItalia.jpg" class="" style="width: 100%;" alt="Coliseu da Italia">
            </div>
            <div class="col">
             <img src="src/images/pontosTuristicos/pontoJapao.jpg" class="" style="width: 100%;" alt="cidade do Japao">
            </div>
        </div>
        <div class="row">
            <div class="col">
            <img src="src/images/pontosTuristicos/pontoAlemanha.jpg" class="" style="width: 100%;" alt="cidade da Alamanha">
            </div>
            <div class="col">
            <img src="src/images/pontosTuristicos/torre_bigBang.jpg" class="" style="width: 100%;" alt="torre do Big Bang na Inglaterra">
            </div>
            <div class="col">
            <img src="src/images/pontosTuristicos/torreEfiel.jpg" class="" style="width: 100%;" alt="Torre efiel da França">
            </div>
        </div>  
  
  `;

  return container;
}
