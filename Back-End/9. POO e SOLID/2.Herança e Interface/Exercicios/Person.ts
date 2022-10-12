export default class Person {
  constructor(private _name: string, private _birthDate: Date) {}
  
  get name(): string { return this._name; }

  set name(value: string) { 
    this.validateName(value);
    this._name = value; 
  }

  get birthDate(): Date { return this._birthDate; }

  set birthDate(value: Date) { 
    this.validateBirthDate(value);
    this._birthDate = value;
    this.validateAge(this.age);
  }

  get age() {
    const timeDiff = Math.abs(Date.now() - new Date(this._birthDate).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  validateName(nameToValidate: string) {
    if (nameToValidate.length < 3) throw new Error('O nome deve ter no mínimo 3 caracteres.')
  }

  validateBirthDate(birthDateToValidate: Date) {
    if (birthDateToValidate.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.')
  }

  validateAge(ageToValidate: number) {
    if (this.age > 120) throw new Error('A pessoa não pode possuir mais de 120 anos.')
  }
}

// const tomaz = new Person('Tomaz', new Date('2001-07-27'))
// tomaz.birthDate = new Date('1890-07-27')
// console.log(tomaz.age);
// console.log(tomaz.birthDate);


// console.log(tomaz);
const carolina = new Person('Carolina da Silva', new Date('2005/03/17'));
console.log(carolina.age);


