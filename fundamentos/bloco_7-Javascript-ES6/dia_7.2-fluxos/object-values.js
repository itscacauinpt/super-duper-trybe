//O Object.values segue a mesma lógica que o Object.keys 
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

/**usando o for..in
 * for (const property in coolestTvShow) {
  console.log(coolestTvShow[property]);
}
 */

console.log(Object.values(coolestTvShow));
console.log(Object.keys(coolestTvShow));

//exemplo da parte I:
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const skillsKeys = (student) => Object.keys(student);
const skillsValues = (student) => Object.values(student);
console.log(skillsValues(student));
console.log(skillsKeys(student));

const list = () => {
  for (let i = 0; i < 4; i += 1){
    console.log(`${skillsKeys(student)[i]} -> Nível: ${skillsValues(student)[i]}`)
  }
}
list();
