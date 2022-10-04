var massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function massConvert(valor, base, toBe) {
    var baseIndex = massUnits.findIndex(function (unit) { return unit === base; });
    var toBeIndex = massUnits.findIndex(function (unit) { return unit === toBe; });
    var exponent = toBeIndex - baseIndex;
    return valor * (Math.pow(10, exponent));
}
