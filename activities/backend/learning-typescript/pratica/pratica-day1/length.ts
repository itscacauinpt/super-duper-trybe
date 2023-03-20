const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
// const units = {
//   "km": 1000,
//   "hm": 100,
//   "dam": 10,
//   "m": 1,
//   "dm": 0.1,
//   "cm": 0.01,
//   "mm": 0.001,
// };

function convert(valor: number, unid_base: string, unid_conversao: string) {
  // let base;
  // let conversao;
  const from = units.indexOf(unid_base);
  const to = units.indexOf(unid_conversao);
  const expo = from - to;

  const converted = valor * Math.pow(10, expo);
  return converted;
}

// console.log(convert(100, 'km', 'm'));

export default convert;