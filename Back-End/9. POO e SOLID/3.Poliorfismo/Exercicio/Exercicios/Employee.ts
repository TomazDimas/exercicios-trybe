import Enrollable from "./Enrollable";
import Person from "./Person";
import Student from "./Student";

export default class Employee extends Person implements Enrollable {
  private _enrollment: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);
    this._salary = salary;
    this._admissionDate = new Date();
    this._enrollment = this.generateEnrollment()
  }

  get enrollment(): string {
    return this._enrollment;
  } 

  set salary(value: number) {
    if(value < 0) throw new Error('O valor não pode ser negativo');
     
    this.salary = value;
  }

  generateEnrollment(): string {
    const enrollment = `${Math.floor(Math.random() * 10000)}-${Math.floor(
      Math.random() * 10000
    )}-${Math.floor(Math.random() * 10000)}`;
    Person.validateEnrollment(enrollment);
    return enrollment;
  };
}