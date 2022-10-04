var readlineSync = require('readline-sync');

const areaUnits = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function areaConvert(valor: number, base: string, toBe: string): number {
  const baseIndex = areaUnits.findIndex((unit) => unit === base);
  const toBeIndex = areaUnits.findIndex((unit) => unit === toBe);
  const exponent = (toBeIndex - baseIndex);
  return valor * (100 ** exponent);
}

function exec() {
  const value: number = readlineSync.questionInt('Qual valor? ')
  const base: string = readlineSync.question('Qual unidade base? ')
  const toBe: string = readlineSync.question('Para qual unidade converter? ')
  const result: number = areaConvert(value, base, toBe)
  console.log(`${value}${base} é igual a ${result}${toBe}`);  
}

exec();

