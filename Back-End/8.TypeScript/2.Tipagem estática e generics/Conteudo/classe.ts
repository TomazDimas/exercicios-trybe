class Dog {
  name: string;
  breed: string;
  size: string;
  isMale: boolean;

    constructor(name: string, breed: string, size: string, isMale: boolean) {
      this.name = name;
      this.breed = breed;
      this.size = size;
      this.isMale = isMale;
    }

    aboutTheDog(): void {
      console.log(`O cachorro ${this.name} da raça ${this.breed}, têm porte ${this.size} e é ${this.isMale ? 'é macho' : 'é fêmea'}`);
    }
}

const borderCollie = new Dog(`Bali`, 'Border Collie', 'Médio', false);
const poodle = new Dog(`Toby`, 'Poodle Toy', 'Pequeno', true);

console.log(borderCollie);
console.log(poodle);
console.log(borderCollie.aboutTheDog());
console.log(poodle.aboutTheDog());

