class Car {
  brand: string;
  color: string;
  doors: number;

    constructor(brand: string, color: string, doors: number) {
      this.brand = brand;
      this.color = color;
      this.doors = doors;
    }

    honk(): void {
      console.log('FON');
    }

    turnOn(): void {
      console.log('Carro está ligado');
    }

    turnOff(): void {
      console.log('Carro está desligado');
    }

    speedUp(): void {
      console.log('Acelerando...');
    }

    speedDown(): void {
      console.log('Freiando...');
    }

    stop(): void {
      console.log('O carro parou');
    }

    turn(direction: string): void {
      console.log(`Virando para ${direction}`);
    }
}

export default Car;