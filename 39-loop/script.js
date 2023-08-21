// const links = document.querySelectorAll("nav a");

// Para remover item primeiro se transforma em Array a nodeList, mas não muda nada no HTML
const links = Array.from(document.querySelectorAll("nav a"));
const ultimoLink = links.pop();
console.log(links);

// function logHref(item) {
//   const href = item.href;
//   console.log(href);
// }
// links.forEach(logHref);

links.forEach((item) => {
  const href = item.href;
  console.log(href);
})

// acessando o ultimo
console.log(links[links.length - 1]);

///////////////////////////

const lista = ["JavaScript", "HTML", "CSS"];
const body = document.querySelector("body");

// for (let i = 0; i < lista.length; i++) {
//   console.log(lista[i]);
//   // body.innerHTML += "<li>" + lista[i] + "</li>";
//   body.innerHTML += `<li>${lista[i]}</li>`;
// }

///////////////////////

function adicionarBody(item) {
  body.innerHTML += "<li>"+ item +"</li>"
}
lista.forEach(adicionarBody);

// remove o ultimo da lista e se colocar dentro de uma variavel retorna o ultimo, ex const ultimo = lista.pop();
lista.pop();
console.log(lista);

// remove o primeiro da lista
lista.shift();
console.log(lista);

// Adicionar item na lista
lista.push("PHP");
console.log(lista);
