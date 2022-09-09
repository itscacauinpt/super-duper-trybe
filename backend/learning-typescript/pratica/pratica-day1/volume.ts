const units = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function convert(valor: number, unid_base: string, unid_conversao: string) {
  const from = units.indexOf(unid_base);
  const to = units.indexOf(unid_conversao);
  const expo = from - to;

  const converted = valor * Math.pow(1000, expo);
  return converted;
}

export default convert;