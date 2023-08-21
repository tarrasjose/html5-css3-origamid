const imagens = document.querySelectorAll("#galeria li img");

function galeriaTrocar(event) {
  const principal = document.querySelector("#imagem-principal");
  const imagemClicada = event.currentTarget;

  principal.src = imagemClicada.src;
  // uma outra forma de acessar o atributo abaixo
  principal.setAttribute("alt", imagemClicada.getAttribute("alt"));
}

imagens.forEach((imagem) => {
  imagem.addEventListener("click", galeriaTrocar)
})