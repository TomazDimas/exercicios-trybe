const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function massConvert(valor: number, base: string, toBe: string) {
  const baseIndex = massUnits.findIndex((unit) => unit === base);
  const toBeIndex = massUnits.findIndex((unit) => unit === toBe);
  const exponent = toBeIndex - baseIndex;
  return valor * (10 ** exponent);
}

