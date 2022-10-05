"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    Car.prototype.honk = function () {
        console.log('FON');
    };
    Car.prototype.turnOn = function () {
        console.log('Carro está ligado');
    };
    Car.prototype.turnOff = function () {
        console.log('Carro está desligado');
    };
    Car.prototype.speedUp = function () {
        console.log('Acelerando...');
    };
    Car.prototype.speedDown = function () {
        console.log('Freiando...');
    };
    Car.prototype.stop = function () {
        console.log('O carro parou');
    };
    Car.prototype.turn = function (direction) {
        console.log("Virando para ".concat(direction));
    };
    return Car;
}());
exports["default"] = Car;
