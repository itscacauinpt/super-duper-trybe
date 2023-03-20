const arrayNomes = ['Gustavo', 'Astolfo', 'Beatriz', 'Carlos', 'Damião', 1];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const total = arrayNumeros.reduce((total, number) => {
  //console.log(total);
  //console.log(number)

  return total + number;
});
//console.log(total)

function nossoReduce(array, callback, initialValue) {
  let acumulador = initialValue;

  for (let i = 0; i < array.length; i += 1) {
    if (acumulador === undefined) {
      acumulador = callback(array[0], array[1], i, array);
      i += 1;
      continue;
    } else {
      acumulador = callback(acumulador, array[i], i, array);
    }
  }

  return acumulador;
};

console.log(nossoReduce(arrayNumeros, (total, number) => {
  //console.log(total);
  //console.log(number)
  //return total + number;
}))
/**
 * 
 */
