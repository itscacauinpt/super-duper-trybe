//Exemplo de arrow function:
const sum = (value1, value2) => value1 + value2;
//console.log(sum(2, 2));
//console.log(sum(2, '3')); //QUE?

//Código para não quebrar código :v
const outraSum = (valor1, valor2) => {
  if (typeof valor1 !== 'number' || typeof valor2 !== 'number') {
    return 'Os valores devem ser numéricos.'
  }
  return valor1 + valor2;
}
//console.log(outraSum(2, '3')); //Os valores devem ser numéricos.
//console.log(outraSum(2, 3));

//Consertando com o Fluxo de Exeção!

const maisSum = (valor, outroValor) => {
  if (typeof valor !== 'number' || typeof outroValor !== 'number') {
    throw new Error('Os valores devem ser numéricos.');
  }
  return valor + outroValor;
}
/**console.log(maisSum(2, '3')); 
 * throw new Error('Os valores devem ser numéricos.');
    ^

  Error: Os valores devem ser numéricos.
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw
  new: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/new
  error: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error
 */

//Refatorando, uma função com apenas uma função ... '-'

const verifyNumber = (valor, outroValor) => {
  if (typeof valor !== 'number' || typeof outroValor !== 'number') {
    throw new Error('Não dá pra somar palavras numa calculadora mozão!')
  }
};

const Otrasum = (valor, outroValor) => {
  try {
    verifyNumber(valor, outroValor);
    return valor + outroValor;
  } catch (error) {
    throw error.message;
  }
};
//console.log(Otrasum(2, '3'));
//try..catch: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch

//Exemplo:

try {
  console.log('Start of try runs');

  meh;

  console.log('End of try runs -- never reached');

} catch {

  console.log('Error has occured! Please try again')
  //(err) console.log('Error has occored: ' + err) ('Error has occored: ' + err.stack);

} /*finally {
  console.log('This will always run!');
}*/
