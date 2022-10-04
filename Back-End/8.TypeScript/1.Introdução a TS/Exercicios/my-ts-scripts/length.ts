const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convert(valor: number, base: string, toBe: string) {
  const baseIndex = units.findIndex((unit) => unit === base);
  const toBeIndex = units.findIndex((unit) => unit === toBe);
  const exponent = toBeIndex - baseIndex;
  return valor * (10 ** exponent);
}

console.log(`15km em m são: ${convert(15, 'km', 'm')}`);
console.log(`837dm em hm são: ${convert(837, 'dm', 'hm')}`);
