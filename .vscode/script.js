function toggleMode() {
  const html = document.documentElement
  // html.classList.toggle("light")  também pode ser feito dessa maneira //

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.constains("light")) {
    // se tver light mode, adcionar a imagem light
    img.setAttribute("src", "./icones/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./icones/avatar3x.png")
  }

  // depois fazer a mesma coisa com o ALT
}
