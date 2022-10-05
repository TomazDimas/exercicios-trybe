var Dog = /** @class */ (function () {
    function Dog(name, breed, size, isMale) {
        this.name = name;
        this.breed = breed;
        this.size = size;
        this.isMale = isMale;
    }
    Dog.prototype.aboutTheDog = function () {
        console.log("O cachorro ".concat(this.name, " da ra\u00E7a ").concat(this.breed, ", t\u00EAm porte ").concat(this.size, " e \u00E9 ").concat(this.isMale ? 'é macho' : 'é fêmea'));
    };
    return Dog;
}());
var borderCollie = new Dog("Bali", 'Border Collie', 'Médio', false);
var poodle = new Dog("Toby", 'Poodle Toy', 'Pequeno', true);
console.log(borderCollie);
console.log(poodle);
console.log(borderCollie.aboutTheDog());
console.log(poodle.aboutTheDog());
