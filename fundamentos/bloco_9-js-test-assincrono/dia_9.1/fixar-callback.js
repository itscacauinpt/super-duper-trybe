//função com a logica
const userFullName = ({ firstName, lastName }) => `Hi, I'm ${firstName} ${lastName}.`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}.`;

//objeto usado como dados para completar as funções
const user = {
  firstName: "Anna",
  lastName: "Akana",
  nationality: "Asian American"
};

//função callbak, que faz o retorno da logica
const getUSer = (logicORCallback) => {
  return logicORCallback(user);
};
//olha só eu chamando uma função dentro de uma função u.u
console.log(getUSer(userFullName));
console.log(getUSer(userNationality));
setTimeout(() => console.log(getUSer(userFullName)), 3000); // Para que funcione é necessário chamá-lo após 3000 milissegundos:
setTimeout(() => console.log(getUSer(userNationality)), 4000); // Para que funcione é necessário chamá-lo após 3000 milissegundos:
