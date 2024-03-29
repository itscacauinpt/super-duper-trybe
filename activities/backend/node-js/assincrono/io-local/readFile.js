// O método fornecido pelo módulo fs para leitura assíncrona de arquivos é o fs.readFile.
// método callback

const fs = require('fs');
const nomeDoArquivo = 'meu=arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});

