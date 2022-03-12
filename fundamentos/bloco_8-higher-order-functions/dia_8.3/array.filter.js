//it takes an array, check each item, it get some condition, and if this condition is true it return true
const ints = [1, 2, 3, 4, 5, 6];

const evens = ints.filter(function (item) {
  return item % 2 === 0;
});
console.log(evens);

const odd = ints.filter((item) => item % 2 !== 0);
console.log(odd);

