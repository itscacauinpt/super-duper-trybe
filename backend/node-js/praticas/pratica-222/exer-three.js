// Reescreva o código do exercício anterior para que utilize async/await.

async function somaMultiplica(num1, num2, num3) {
  const primise = await new Promise((resolve, reject) => {
    if (typeof num1 !== 'number'
    || typeof num2 !== 'number'
    || typeof num3 !== 'number') {
      return reject(new Error('Tu escreveu uma caracter não numérico ai cara'));
    }

    const result = (num1 + num2) * num3;
    
    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    } else {
      resolve(`Deu bom: ${result}`);
    }
  })
}
somaMultiplica(2, 3, 4) // chamar a funcao (?)
async function toWait() {
  const funct = await somaMultiplica(2, 3, 40);
  return funct;
}

// console.log(toWait()); // pending

try {
  toWait().then((resolve) => console.log(resolve))
} catch (error) {
  console.log(error.message)
}

// somaMultiplica(2, 3, 4).then((resolve) => console.log(resolve)).catch((error) => console.log(error.message));
