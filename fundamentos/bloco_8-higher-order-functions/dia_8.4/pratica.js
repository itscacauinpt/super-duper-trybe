//1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // de onde caralhos saiu esse concat mano
  //return arrays.reduce((acc, curr) => acc.concat(curr));
  return arrays.reduce((acc, curr) => [`${acc}, ${curr}`]);
};
//console.log(flatten())
