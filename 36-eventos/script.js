const ativar = document.querySelector(".ativar");

// Usando @param ele vai autocompletar com os eventos MouseEvent
/** @param {MouseEvent} event */
function handleClick(event) {
  console.log(event.pageX);
}

ativar.addEventListener("click", handleClick);

//////////////////////

const Botao = document.querySelector(".botao");
console.log(Botao);

function mostrar() {
  const texto = document.querySelector(".texto");
  texto.classList.toggle("ativar");
}

Botao.addEventListener("click", mostrar);

//////////////////
function coordenadasMouse(event) {
  const coordenadas = {
    x: event.x,
    y: event.y
  }
  console.log(coordenadas);
}

window.addEventListener("mousemove", coordenadasMouse)