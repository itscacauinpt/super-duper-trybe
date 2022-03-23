// npm init -y
// npm i node-fetch@^2

const fetch = require('node-fetch');


const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev'; // sendo humano https
  fetch(url) // fetch recebendo a url
  .then((response) => { // then para rodar só qundo tiver os dados prontos bunitinhus
    response.json() // versão .json da resposta, como json tbm é assincrona >>>
  })
  .then((data) => { // <<< tbm usamos then aqui para acessar a versão do primeiro then <:
    console.log(data.value)
  })
  .catch((error) => console.log(`Algo deu errado :( \n${error}`));
  // console.log(fetch(url));
}
//fetchJoke();

// refatorando a função para usar o fatality async-await
// podemos usar tudo junto >>>
const fetchJoke2 = async () => { //async
  const url = 'https://api.chucknorris.io/jokes/random?category=dev'; // sendo humano https

  const result = await fetch(url)
  .then((response) => response.json())
  .then((data) => data.value)
  .catch((error) => `Algo deu errado :( \n${error}`);
  console.log(result);
  // console.log(fetch(url));
}
//fetchJoke2();

// <<<< OU usar o combo try catch
const fetchJoke3 = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try { // usando o try catch no lugar de .then
    const response = await fetch(url);// const com AWAIT // fetch continua recebendo a url
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}
// fetchJoke3();
