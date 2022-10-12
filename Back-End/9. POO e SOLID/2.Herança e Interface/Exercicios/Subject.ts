export default class Subject {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  validateName(value: string) {
    if (value.length < 3)
      throw new Error("O nome tem que possuir no mínimo 3 caracteres");
  }
}

const math = new Subject("Matemática");
const history = new Subject("História");
const philosophy = new Subject("Filosofia");

console.log(math);
console.log(history);
console.log(history);
