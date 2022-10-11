class DateClass {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day :number = 1, month: number, year: number) {
    const date = new Date(year, month - 1, day);
    if (date instanceof Date) {
      this._day = day;
      this._month = month;
      this._year = year;
    } else {
      this._day = 1;
      this._month = 1;
      this._year = 1990;
    }
  }

  get day() : number {
    return this._day;
  }

  set day(value: number) {
    this._day = value;
  }

  get month() : number {
    return this._month;
  }

  set month(value: number) {
    this._month = value;
  }

  get year() : number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  getMonthName(): string {
    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julio',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
    return months[this._month - 1];
  }

  isLeapYear() : boolean {
    return this._year % 4 === 0;
  }

  compare(toCompare: Date) {
    const date = new Date(this._year, this._month - 1, this._day);
    if (toCompare === date) return 0;
    if (toCompare > date) return -1;
    else return 1;
  }
}

const aniver = new DateClass(27, 7, 2001);
const bissexto = new DateClass(20, 5, 2004);

console.log(aniver);
console.log(aniver.getMonthName());
console.log(bissexto.getMonthName());
console.log(aniver.isLeapYear());
console.log(bissexto.isLeapYear());
console.log(aniver.compare(new Date (2001/7/28)));
console.log(aniver.compare(new Date (2000/7/28)));

