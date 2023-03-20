const fs = require('fs').promises;

const simpsons = 'simpsons.json';

// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
function readSimpsons() {
  fs.readFile(simpsons, 'utf8')
  .then((allDataJson) => {
    const allData = JSON.parse(allDataJson);
    const nameAndId = allData.map((caracter) => `${caracter.id} - ${caracter.name}`)
    console.log(nameAndId);
  })
  .catch((error) => {
    console.log(error.message)
    process.exit(1);
  })
}
// readSimpsons();

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
async function getSimpsonById(id) {
  const allData = await fs.readFile(simpsons, 'utf8');
  const meh = JSON.parse(allData);
  const chosenSimpson = meh.find((caracter) => Number(caracter.id) === id);
  return console.log(chosenSimpson.name);
}
// getSimpsonById(2);

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
async function editSimpsons() {
  const allData = await JSON.parse(await fs.readFile(simpsons, 'utf8'));
  const edit = allData.filter((caracter) => {
    return caracter.id != 10 && caracter.id != 6;
  })
  return console.log(edit);
}
// editSimpsons();

async function editAndWrite() {
  const allData = await JSON.parse(await fs.readFile(simpsons, 'utf8'));
  let new_file = [];
  const theIds = [1, 2, 3, 4];
  const edit = allData.filter((caracter) => {
    return theIds.includes(Number(caracter.id));
  })
  new_file = edit;

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(new_file))
  return console.log('Arquivo escrito de boa');
}
// editAndWrite();

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
function getDataFromNewFile() {
  const allData = fs.readFile('./simpsonFamily.json', 'utf8')
    .then((data) => JSON.parse(data))
    .catch((error) => console.log(error.message))
  return allData;
}

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
async function editAndWriteAgain() {
  const data = await getDataFromNewFile();

  new Promise((resolve, reject) => {
    if (data.some((each) => each.name == 'Nelson Muntz')) {
      reject(new Error('Nelson já tá na lista mozão'))
    } else {
      data.push({id: JSON.stringify(data.length + 1), name: 'Nelson Muntz'})
      const deu = fs.writeFile('./simpsonFamily.json', JSON.stringify(data))
      resolve(deu)
      console.log('Arquivo reescrito de boa');
    }
  })
}
// editAndWriteAgain();

// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
async function replaceCaracter() {
  const data = await getDataFromNewFile();

  const edit = data.filter((caracter) => {
    return caracter.id != '5'
  })
  edit.push({id: '5', name: 'Maggie Simpson'})
  
  fs.writeFile('./simpsonFamily.json', JSON.stringify(edit))
  return console.log('Personagem Substituído com Sucesso');
}
// replaceCaracter();