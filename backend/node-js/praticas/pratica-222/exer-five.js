const fs = require('fs').promises;

const theStrings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

// function is not iterable (cannot read property Symbol(Symbol.iterator))
// async function writeArq(){ 
//   theStrings.map(async (str) => {
//     await fs.writeFile(`./file-${str}.txt`, str)
//     return str
//   })
// };

const writeArq = theStrings.map(async (str) => {
    await fs.writeFile(`./file-${str}.txt`, str)
    return str
});

Promise.all(writeArq)
  .then((arq) => console.log(arq))
  .catch((error)=> console.log(error.message));
