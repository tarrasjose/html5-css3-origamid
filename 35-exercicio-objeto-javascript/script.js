// 1 - Crie uma função (livro) que possui 3 parâmetros: nome, ano e autor.
// 2 - No corpo da função:
//  2.1 - Transforme o nome para letra maiúscula: toUpperCase()
//  2.2 - Calcule o total de anos desde o lançamento do livro: 2050 - ano
//  2.3 - Crie uma variável com a frase: nome + ' por ' + autor;
//  2.4 - Coloque os 3 valores acima em um objeto.
// 3 - Retorne (return) o objeto definido.
// 4 - Execute a função com os seguintes argumentos:
//     'O Senhor dos Anéis', 1954, 'J. R. R. Tolkien'
// 5 - Guarde o retorno da função executada em uma variável.
// 6 - Log a frase final da função executada no console.


// function livro(nome, ano, autor) {
//   return {
//     nome: nome.toUpperCase(),
//     ano: 2023 - ano,
//     frase: `${nome} por ${autor}`
//   }
// }
// console.log(livro("Senhor dos anéis", 1950, "Josh"));


// function livro2(nome, ano, autor) {
//   console.log(nome.toUpperCase());
//   console.log(2023 - ano);
//   console.log(`${nome} por ${autor}`);
// }
// livro2("Game of thrones", 1990, "George R. R. Martin ")

// function livro3(nome, ano, autor) {
//   nome = nome.toUpperCase();
//   ano = 2023 - ano;
//   frase = `${nome} por ${autor}`
//   return {
//     nome,
//     ano,
//     frase
//   }
// }

// const livros = livro3("Senhor dos anéis", 1950, "Josh")
// // console.log(livro3("Senhor dos anéis", 1950, "Josh"));
// console.log(livros);
// console.log(livros.frase);

///////////////////////////////


// function livro4(nome, ano, autor) {
//   return {
//     nome:  nome.toUpperCase(),
//     ano: 2023 - ano,
//     frase: `${nome} por ${autor}`
//   }
// }

// const livroRetorno = livro4("Senhor dos anéis", 1950, "Josh")
// // console.log(livro3("Senhor dos anéis", 1950, "Josh"));
// console.log(livroRetorno);
// console.log(livroRetorno.frase);


////////////////////////////////// sendo descritivo
function livro(nome, ano, autor) {
  const nomeMaior = nome.toUpperCase();
  const totalAnos = 2050 - ano;
  const frase = `${nome} por ${autor}`;
  const objeto = {
    nome: nomeMaior,
    totalAnos,
    frase,
  };
  return objeto;
}

const livroRetorno = livro("Senhor dos anéis", 1950, "Josh")
console.log(livroRetorno);
console.log(livroRetorno.frase);