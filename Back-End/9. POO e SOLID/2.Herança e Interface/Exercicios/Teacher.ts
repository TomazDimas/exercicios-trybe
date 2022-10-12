import Employee from "./Employee";
import Person from "./Person";

export default class Teacher extends Person implements Employee {
  private _subject: string;
  private _registration: number;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);
    this._salary = salary;
  }

  get subject(): string {
    return this._subject
  }

  set subject(value: string) {
    this._subject = value;
  }

  get registration(): number {
    return this._registration
  }

  set registration(value: number) {
    this._registration = value;
  }

  get salary(): number {
    return this._salary
  }

  set salary(value: number) {
    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate
  }

  set admissionDate(value: Date) {
    this._admissionDate = value;
  }

  generateRegistration(): string {
    const registration = `${Math.floor(Math.random() * 10000)}-${Math.floor(
      Math.random() * 10000
    )}-${Math.floor(Math.random() * 10000)}`;
    // this.validateEnrollment(enrollment);
    return registration;
  }
}