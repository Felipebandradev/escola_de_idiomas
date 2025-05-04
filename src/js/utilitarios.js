// Funções para criação de elementos
export function criandoElemento(tag, className, textContent) {
  const elemento = document.createElement(tag);
  if (className) elemento.className = className;
  if (textContent) elemento.textContent = textContent;
  return elemento;
}

export function criandoNavbar(links) {
  // Criando uma pequena navbar com os botôes
  const nav = criandoElemento("nav");

  links.forEach((idioma) => {
    const link = criandoElemento(
      "a",
      "",
      idioma.charAt(0).toUpperCase() + idioma.slice(1)
    );
    link.href = "#" + idioma;
    nav.appendChild(link);
  });

  return nav;
}
