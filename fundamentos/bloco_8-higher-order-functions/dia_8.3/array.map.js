//map takes the item from the array, does something to it and put something else back in
const three = [1, 2, 3];

const doubled = three.map(function (item){
  return item * 2;
})
console.log(doubled);

const threeple = three.map((item) => item * 3);
console.log(threeple);

const nomis = ['ana', 'banana', 'ciranda', 'diana'];

const sobrenomis = nomis.map((item) => `${item} sobrenome`);
console.log(sobrenomis);

const binary = three.map((item) => item.toString(2));
console.log(binary);
