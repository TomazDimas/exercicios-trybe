import Employee from "./Employee";
import Enrollable from "./Enrollable";
import Person from "./Person";

export default class Student extends Person implements Enrollable {
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
    Person.validateEnrollment(enrollment);
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