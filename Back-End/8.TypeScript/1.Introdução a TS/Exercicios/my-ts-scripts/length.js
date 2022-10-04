var units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convert(valor, base, toBe) {
    var baseIndex = units.findIndex(function (unit) { return unit === base; });
    var toBeIndex = units.findIndex(function (unit) { return unit === toBe; });
    var exponent = toBeIndex - baseIndex;
    return valor * (Math.pow(10, exponent));
}
console.log("15km em m s\u00E3o: ".concat(convert(15, 'km', 'm')));
console.log("837dm em hm s\u00E3o: ".concat(convert(837, 'dm', 'hm')));
