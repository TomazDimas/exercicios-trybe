import Employee from "./Employee";
import Person from "./Person";
import Subject from "./Subject";

export default class Teacher extends Employee {
  private _subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate, salary);
    this._subject = subject;
  }

  get subject(): Subject {
    return this._subject
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  generateRegistration(): string {
    const registration = `${Math.floor(Math.random() * 10000)}-${Math.floor(
      Math.random() * 10000
    )}-${Math.floor(Math.random() * 10000)}`;
    Person.validateEnrollment(registration);
    return registration;
  }
}