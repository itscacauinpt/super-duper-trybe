// ps  Aqui utilizamos o node-fetch e o Node.js para executar os exemplos no terminal,
// entretanto o código acima utiliza o fetch, compatível com o fetch do navegador.
// Isso quer dizer que você pode realizar requests no front também, quando estiver integrando front-end e back-end.
const fetch = require('node-fetch');

// Armazenamos o token numa variável.
// Num ambiente real, esse valor viria do Local Storage, ou de uma variável de ambiente
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

const fetchGet = 'https://postman-echo.com/get?param1=teste';
const fetchPost = 'https://postman-echo.com/post?param1=teste';

// Criamos um novo objeto de Headers
const headers = new fetch.Headers({
  Authorization: API_TOKEN, // 2
  'Content-Type': 'application/json', // 4 // Precisamos adicionar o header `Content-Type` e defini-lo como `application/json`
});

const body = JSON.stringify({ // 4
  name: 'Tryber',
  email: 'tryber@betrybe.com',
  password: 'Tr1b3r'});

fetch(fetchPost, {
  headers, // 1 // Passamos o objeto de headers e o verbo post como parâmetro para o fetch
  method: 'POST', // 3
  body, // 4
}).then((response) => {
      // Ao receber a resposta, verificamos se correu tudo bem
    if (!response.ok) {
      // Caso não, forçamos a Promise a ser rejeitada
      return Promise.reject(response);
    }

      // Caso esteja tudo OK, lemos o body como JSON
    return response.json();
  }).then((data) => {
      // Por fim, escrevemos o body no console
    console.log(data);
  }).catch((errorOrResponse) => {
      // Em caso de falha simples (a request completou com um status diferente de 2xx)
      // simplesmente logamos o status no console
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

      // Caso tenha acontecido um erro de rede (não foi possível completar a request)
      // logamos o erro todo
    console.error(errorOrResponse);
  });

// 1 -headers {
//   args: { param1: 'teste' },
//   data: { name: 'Tryber', email: 'tryber@betrybe.com', password: 'Tr1b3r' },
//   files: {},
//   form: {},
//   headers: {
//     'x-forwarded-proto': 'https',
//     'x-forwarded-port': '443',
//     host: 'postman-echo.com',
//     'x-amzn-trace-id': 'Root=1-60481a4f-6fe65f3d723405ca6c6c7536',
//     'content-length': '66',
//     authorization: '2d635ea9b637ea0f27d58985cc161d64',
//     'content-type': 'application/json',
//     accept: '*/*',
//     'user-agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
//     'accept-encoding': 'gzip,deflate'
//   },
//   json: { name: 'Tryber', email: 'tryber@betrybe.com', password: 'Tr1b3r' },
//   url: 'https://postman-echo.com/post?param1=teste'
// }

// 2 - authorization {
//   args: { param1: 'teste' },
//   headers: {
//     'x-forwarded-proto': 'https',
//     'x-forwarded-port': '443',
//     host: 'postman-echo.com',
//     'x-amzn-trace-id': 'Root=1-60481786-09532220660034a96956e705',
//     authorization: '2d635ea9b637ea0f27d58985cc161d64',
//     accept: '*/*',
//     'user-agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
//     'accept-encoding': 'gzip,deflate'
//   },
//   url: 'https://postman-echo.com/get?param1=teste'
// }

// Para utilizar outros verbos HTTP, basta alterar o valor da propriedade method, informando o método desejado.
// 3 - post method {
//   args: { param1: 'teste' },
//   data: {},
//   files: {},
//   form: {},
//   headers: {
//     'x-forwarded-proto': 'https',
//     'x-forwarded-port': '443',
//     host: 'postman-echo.com',
//     'x-amzn-trace-id': 'Root=1-60481884-5a7755d35f884dad157968d7',
//     'content-length': '0',
//     authorization: '2d635ea9b637ea0f27d58985cc161d64',
//     accept: '*/*',
//     'user-agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
//     'accept-encoding': 'gzip,deflate'
//   },
//   json: null,
//   url: 'https://postman-echo.com/post?param1=teste'
// }

// 4 - enviando um body {
//   args: { param1: 'teste' },
//   data: { name: 'Tryber', email: 'tryber@betrybe.com', password: 'Tr1b3r' },
//   files: {},
//   form: {},
//   headers: {
//     'x-forwarded-proto': 'https',
//     'x-forwarded-port': '443',
//     host: 'postman-echo.com',
//     'x-amzn-trace-id': 'Root=1-60481a4f-6fe65f3d723405ca6c6c7536',
//     'content-length': '66',
//     authorization: '2d635ea9b637ea0f27d58985cc161d64',
//     'content-type': 'application/json',
//     accept: '*/*',
//     'user-agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
//     'accept-encoding': 'gzip,deflate'
//   },
//   json: { name: 'Tryber', email: 'tryber@betrybe.com', password: 'Tr1b3r' },
//   url: 'https://postman-echo.com/post?param1=teste'
// }