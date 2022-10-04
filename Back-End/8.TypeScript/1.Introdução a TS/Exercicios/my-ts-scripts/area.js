var readlineSync = require('readline-sync');
var areaUnits = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
function areaConvert(valor, base, toBe) {
    var baseIndex = areaUnits.findIndex(function (unit) { return unit === base; });
    var toBeIndex = areaUnits.findIndex(function (unit) { return unit === toBe; });
    var exponent = (toBeIndex - baseIndex);
    return valor * (Math.pow(100, exponent));
}
function exec() {
    var value = readlineSync.questionInt('Qual valor? ');
    var base = readlineSync.question('Qual unidade base? ');
    var toBe = readlineSync.question('Para qual unidade converter? ');
    var result = areaConvert(value, base, toBe);
    console.log("".concat(value).concat(base, " \u00E9 igual a ").concat(result).concat(toBe));
}
exec();
