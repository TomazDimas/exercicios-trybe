const areaUnits = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function areaConvert(valor: number, base: string, toBe: string): number {
  const baseIndex = measureUnits.findIndex((unit) => unit === base);
  const toBeIndex = measureUnits.findIndex((unit) => unit === toBe);
  const exponent = (toBeIndex - baseIndex);
  return valor * (100 ** exponent);
}

