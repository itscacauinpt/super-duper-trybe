
// O módulo fs possui um segundo modelo de API que, em vez de trabalhar com callbacks, retorna Promises.
// Observação: Para utilizar a interface de Promises do fs, precisamos alterar a importação do módulo fs para ('fs').promises.
// sempre que precisarmos ler arquivos de forma assíncrona, podemos utilizar o método readFile do módulo ('fs').promises.

const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  });
