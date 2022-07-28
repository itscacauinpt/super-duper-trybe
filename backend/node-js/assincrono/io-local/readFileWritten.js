const fs = require('fs').promises;

const nomeDoArquivo = 'meu-outro-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8')
  .then((arq) => {
    console.log(`Arquivo: ${arq}`)
  })
  .catch((error) => {
    console.log(`Não deu pra achar o arq ${nomeDoArquivo}\n Erro: ${error}`);
    process.exit(1);
  });