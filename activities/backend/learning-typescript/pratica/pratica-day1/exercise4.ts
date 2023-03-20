// npm install readline-sync
// npm install -D @types/readline-sync

import readLine from "readline-sync";
import Months from "./exercise2";
import Seasons from "./exercise3";

const theMonths = Object.values(Months); // (alias) enum Months import Months

const choosenMonth = readLine.keyInSelect(theMonths, 'Escolah um mês: ');

const south = {
  [Seasons.OUTONO]: [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
  [Seasons.INVERNO]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
  [Seasons.PRIMAVERA]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
  [Seasons.VERAO]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
}

const north = {
  [Seasons.PRIMAVERA]: south[Seasons.OUTONO],
  [Seasons.VERAO]: south[Seasons.INVERNO],
  [Seasons.OUTONO]: south[Seasons.PRIMAVERA],
  [Seasons.INVERNO]: south[Seasons.VERAO],
}

const hemispheres = {
  'Norte': north,
  'Sul': south,
}

const choiceHemisphere = readLine.keyInSelect(Object.keys(hemispheres), 'Escolha um hemisfério');

const month = Object.values(Months)[choosenMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);

const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];

Object.entries(chosenHemisphereSeasons).map((entry) => {
  const seasons = entry[0];
  const months = entry[1];

  if (months.includes(month)) console.log(seasons);
});

// Estações do ano no Hemisfério Norte
// Estação	Início	Término
// Outono	23 de setembro	21 de dezembro
// Inverno	21 de dezembro	20 de março
// Primavera	20 de março	21 de junho
// Verão	21 de junho	23 de setembro

// Estações do ano no Hemisfério Sul
// Estação	Início	Término
// Outono	20 de março	21 de junho
// Inverno	21 de junho	22 de setembro
// Primavera	22 de setembro	21 de dezembro
// Verão	21 de dezembro	20 de março
