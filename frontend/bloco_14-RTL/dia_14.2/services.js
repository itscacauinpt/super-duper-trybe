/**
  function randomNumberCreator(min, max) {
  // let randomNumber = Math.floor(Math.random() * 100);
  return Math.floor(Math.random() * (max - min) + min);
}
 */

function randomNumberCreator() {
  return Math.floor(Math.random() * 100);
}

console.log(randomNumberCreator());

module.exports = { randomNumberCreator };