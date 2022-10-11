import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  set examsGrades(value: number[]) {
    this._examsGrades = value;
    this.validateGrades();
  }

  set worksGrades(value: number[]) {
    this._worksGrades = value;
    this.validateGrades()
  }

  generateEnrollment() {
    const enrollment = `${Math.floor(Math.random() * 10000)}-${Math.floor(
      Math.random() * 10000
    )}-${Math.floor(Math.random() * 10000)}`;
    this.validateEnrollment(enrollment);
    return enrollment;
  }

  sumGrades() {
    const sum = [...this._examsGrades, ...this._worksGrades].reduce(
      (acc, curr) => acc + curr
    );
    return sum;
  }

  sumAverageGrade() {
    const sum = this.sumGrades();
    const length = this._examsGrades.length + this._worksGrades.length;
    return sum / length;
  }

  validateEnrollment(value: string) {
    if (value.length < 12)
      throw new Error("A matrícula deve possuir no mínimo 16 caracteres");
  }

  validateGrades() {
    if (this._examsGrades.length > 4)
      throw new Error(
        "A pessoa estudante deve possuir no máximo 4 notas de provas"
      );
    if (this._worksGrades.length > 2)
      throw new Error(
        "A pessoa estudante deve possuir no máximo 2 notas de trabalhos"
      );
  }
}

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.worksGrades = [50, 45];
tamires.worksGrades = [47, 42];

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);