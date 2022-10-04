const measureUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function measureConvert(valor: number, base: string, toBe: string) {
  const baseIndex = measureUnits.findIndex((unit) => unit === base);
  const toBeIndex = measureUnits.findIndex((unit) => unit === toBe);
  const exponent = toBeIndex - baseIndex;
  return valor * (10 ** exponent);
}

