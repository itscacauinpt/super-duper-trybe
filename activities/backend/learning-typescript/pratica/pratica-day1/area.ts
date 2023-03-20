const units = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

function convert(valor: number, unid_base: string, unid_conversao: string) {
  const from = units.indexOf(unid_base);
  const to = units.indexOf(unid_conversao);
  const expo = from - to;

  const converted = valor * Math.pow(100, expo);
  return converted;
}

export default convert;