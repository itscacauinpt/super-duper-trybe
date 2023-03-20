//Adicionando mais keys em um objeto ->
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
//console.table(customer);
//customer.lastName = 'Faria'; //objeto.nomeDaPropriedade .
//console.table(customer);

//que saco heuhee
const customer2 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
let newKey = 'lastName';
const lastName = 'Ferreira';
customer2[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer2.firstName} ${customer2.lastName}`;
customer2[newKey] = fullName;
//console.log(customer2);

//Object.keys | Como listar as chaves de um objeto?
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

/*usando o for in
for (const property in coolestTvShow) {
  console.log(property);
}
Listando as chaves com o object.key ->
Object.keys(coolestTvShow);
console.log(Object.keys(coolestTvShow)); //vindo como um array, olha só u.u
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
*/

//Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};
student.Git = 'Bom';
//console.log(student)

function skillsLevel() {
  const arraySkills = Object.keys(student);
  console.log(arraySkills);
  for (let i = 0; i <arraySkills.length; i +=1 ) {
    console.log(`${arraySkills[i]}, Nível: ${student[arraySkills[i]]}`);
  }
  /**
   *for (const index in arrayOfSkills) {
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
   */
}
skillsLevel();