function toggleMode() {
  const html = document.documentElement

  // pegar a tag img
  const img = document.querySelector("#profile img")

  html.classList.toggle("light")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, colocar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrinto, usando óculos escuro e camisa preta, sem barba e fundo azul"
    )
  } else {
    // se tiver sem light mode, colocar a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
    )
  }
}
