// erro síncrono

function dividindo(num1, num2) {
  if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");
  return num1 / num2;
}
// console.log(dividindo(2, 0));
try {
  const result = dividindo(2, 0)
} catch (error) {
  console.log(error.message)
}

// erro assícrono 

function dividindoAssinc(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error("Não pode ser feito uma divisão por zero"));
    const result = num1 / num2;

    resolve(result);
  })
  return promise;
}

dividindoAssinc(2, 0)
.then(result => console.log(`sucesso: ${result}`))
.catch(err => console.log(`erro: ${err.message}`));

// Formatos de Callback que recebem dois parâmentros: erros e resultado, assim como vimos no exemplo acima, são chamados de node-style callbacks e são, por convenção, a melhor maneira de se estruturar uma callback.
// Importante: Toda API de módulos nativos do Node.js utiliza esse mesmo formato de callbacks.

// const fs = require('fs');

// fs.readFile('./arquivo.txt', (err, content) => {
//   if (err) {
//     console.error(`Erro ao ler o arquivo: ${err.message}`);
//     return;
//   }

//   console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
// });

const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
  // fs, para realizar a leitura desse arquivo, fs.readFile(fileName, (err, content) => {});
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });

  });
}
readFilePromise('file1.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso arquivo 1 seja lido,
    console.log(`Lido file1.txt com ${content.byteLength} bytes`); // Escrevo o resultado no console
    return readFilePromise('file2.txt'); // Chamo novamente a função, que me retorna uma nova Promise
  })
  .then(content => { // Caso a Promise retornada pelo `then` anterior seja resolvida,
    console.log(`Lido file2.txt com ${content.byteLength} bytes`); // Escrevemos o resultado no console
    return readFilePromise('file3.txt'); // E chamamos a função novamente, recebendo uma nova promessa
  })
  .then((content) => { // Caso a promessa de leitura do `file3.txt` seja resolvida,
    console.log(`Lido file3.txt com ${content.byteLength} bytes`); // Logamos o resultado no console
  })
  .catch((err) => { // Caso qualquer uma das promessas ao longo do caminho seja rejeitada
    console.log(`Erro ao ler arquivos: ${err.message}`); // Escrevemos o resultado no console
  });


// Reflita e conceitue com suas próprias palavras: qual a diferença de lidar com o fluxo assíncrono com callback em relação a Promises?
// Com a promisse resolvemos o problema da assincronicidade, assim não paramos o algorimo inteiro para resolver na callback.
