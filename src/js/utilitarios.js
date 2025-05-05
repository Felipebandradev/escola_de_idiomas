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
                    <a class="navbar-brand text-light" href="index.html">LinguaNova</a>
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
                            <a class="nav-link pintaBtn text-light"  href="lugares.html ">
                                LUGARES
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link pintaBtn text-light"  href="precos.html ">
                                PREÇOS
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
