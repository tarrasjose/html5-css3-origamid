// Ativar links do menu 
// para ficar selecionado bicicletas, seguros e contato.
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// /////////////////////////////
// Ativar itens do orçamento 
// para abrir direto no selecionado
const parametros = new URLSearchParams(location.search);
// console.log(parametros);

function ativarProduto(parametro) {
  // console.log(parametro);
  const elemento = document.getElementById(parametro);
  // console.log(elemento);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// ///////////////////////////
// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");
// console.log(perguntas);

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  // console.log(pergunta);
  const controls = pergunta.getAttribute("aria-controls");
  // console.log(controls);
  const resposta = document.getElementById(controls);
  // console.log(resposta);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  // aria expanded vai ser igual ativa, quando clica na pergunta muda para ativa e o contains diz se é true ou false e usamos o true ou false do ativa para mudar o aria-expanded
  pergunta.setAttribute("aria-expanded", ativa)

}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);


// //////////////////////
// Galeria de Bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  // console.log(img);
  const media = matchMedia("(min-width: 1000px)").matches;
  // console.log(media);
  // se a tela for maior que 1000px vai jogar a imagem pra cima
  if (media) {
    galeriaContainer.prepend(img);
  }
  // prepend método insere um conjunto de objetos ou objetos de string antes do primeiro filho do Element.
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//////////////////////////////
// Animação com o plugin
if (window.SimpleAnime) {
  new SimpleAnime();
}

////////////////////////////
// Testando o plugin clipboard
if (window.ClipboardJS) {
  new ClipboardJS('.introducao-conteudo p');

}