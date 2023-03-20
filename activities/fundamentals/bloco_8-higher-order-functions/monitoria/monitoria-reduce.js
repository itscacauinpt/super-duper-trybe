//https://app.betrybe.com/course/live-lectures/sd-cohort-xp-b#monitoria-reduce
//getting an array and tranforming into a number
const arrayToNumber = (arrayOfAdventures) => {
  return arrayOfAdventures.reduce((acc, curr) => {
    return acc + curr.exemplo.lenght;
  }, 0);//its nice to set the initial value before everything, because
};