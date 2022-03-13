const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
function formatedBookNames() {
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}
//console.log(formatedBookNames());
//console.log(books[0].name)

//2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
function nameAndAge() {
  const arrayDeObjetos = books.map((book) => ({name: book.author.name, age: book.author.birthYear})); 
  //oh dificuldade pra achar o lugar certo do parenteses ¬¬' 
  return arrayDeObjetos;
}
//console.log(nameAndAge());

//3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
function fantasyOrScienceFiction() {
  return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
}
//console.log(fantasyOrScienceFiction())

//4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
//Dica: use as funções filter e sort
function oldBooksOrdered() {
//sei lá mermão
  const filter =  books.filter((book) => book.releaseYear < 1958);
  return filter.sort();
};
//console.log(oldBooksOrdered())

//5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
function fantasyOrScienceFictionAuthors() {
  const fantScien = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
  const fantScienName = fantScien.map((book) => `${book.author.name}`);
  const fantScienNameSort = fantScienName.sort();
  return fantScienNameSort;
  //return fantScien.sort((bookA, bookB) => bookB.name - bookA.name);
}
//console.log(fantasyOrScienceFictionAuthors())

//6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
function oldBooks() {
  // MANO
  const filter =  books.filter((book) => book.releaseYear < 1958);
  return filter.map((book) => book.name);
}
//console.log(oldBooks());

//7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
//Dica: cada inicial termina com um ponto.
function authorWith3DotsOnName() {
  // escreva seu código aqui
  //J. R. R. Tolkien
  //que gostosinho achei o endswith no gabarito u.u
  //https://www.w3schools.com/jsref/jsref_endswith.asp
  //mano que gambiarra huehe
  
  return books.find((book) => book.author.name.split(' ').filter((nome) => nome.endsWith('.')).length === 3).name;
}
//console.log(authorWith3DotsOnName())
