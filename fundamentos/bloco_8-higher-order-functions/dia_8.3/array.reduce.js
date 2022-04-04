//IT DOES NOT REDUCE
const sum = [1, 2, 3].reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum);

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//not using the reduce function
function findSum(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index+=1) {
    sum += arr[index];
  }
  return sum;
}
console.log(findSum(arr));

//using the reduce
//this function takes two parameters: accumulator and current
const output = arr.reduce((acc, curr) => acc += curr);
const oto = arr.reduce(function(acc, curr) {
  return acc += curr
}, 0);
console.log(output);
console.log(oto);

//find the max
function findMax(arr) {
  let max = 0;
  for (let index = 0; index < arr.length; index++) {
    if(arr[index] > max){
      max = arr[index];
    };
  };
  return max;
};
console.log(findMax(arr));

//find max with reduce

//const outpuMax = arr.reduce((acc, curr) => )
const outpuMax = arr.reduce(function(accmax, curr) {
  if(curr > accmax) {
    accmax = curr;
  }
  return accmax;
}, 0)
console.log(outpuMax);
console.log('meh')