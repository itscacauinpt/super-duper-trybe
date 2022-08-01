// npm i express
// "dev": "nodemon index.js"
const express = require('express');
const app = express();

app.get('/hello', handleHelloRequest);
// app.METODO(caminho, callback)

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

function handleHelloRequest(request, response) {
  response.status(200).send('Hello World, carai não precisa do comando npm start, saquei!');
}

//  Para executar uma aplicação em produção, deve-se utilizar o script start com o comando node index.js.
// npm start
// .json -> "start": "node index.js"

// npm run dev
// "dev": "nodemon index.js"
// node index.js

// http://localhost:3001/hello

// Criar uma nova aplicação Express;
// Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello, a função handleHelloWorldRequest deve ser chamada;
// Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
// Ao tratar uma requisição com método GET no caminho /hello, enviar o status HTTP 200 que significa OK e a mensagem 'Hello World!'.

//
// nodemon para facilitar o desenvolvimento, atualiza a aplicação a cada modificação salva feita
// Observe que passamos o parâmetro -D que indica ao npm que esse pacote deve ser instalado como uma dependência de desenvolvimento.
