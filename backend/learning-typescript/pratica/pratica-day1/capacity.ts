const units = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function convert(valor: number, unid_base: string, unid_conversao: string) {
  const from = units.indexOf(unid_base);
  const to = units.indexOf(unid_conversao);
  const expo = from - to;

  const converted = valor * Math.pow(10, expo);
  return converted;
}

export default convert;