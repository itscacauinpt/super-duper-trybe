/**
 * const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

repeat(5, console.group);
 */
/**
 * const sum = (num1, num2) => num1 + num2;

const calculator = (func) => func(10, 5);

console.log(calculator(sum));
 */

const radius = [3, 1, 2, 4];

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circunference = (radius) => {
  return 2 * Math.PI * radius;
};

const diameter = (radius) => {
  return 2 & radius;
}

const calculator = (radius, logic) => {
  const output = [];
  for (let i = 0; i < radius.length; i +=1) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculator(radius, area));
console.log(calculator(radius, diameter));
console.log(calculator(radius, circunference));
