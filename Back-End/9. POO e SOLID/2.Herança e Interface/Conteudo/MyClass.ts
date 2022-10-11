interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    return `${this.myNumber + myParam}`
  }
}

const object = new MyClass(7);
console.log(object.myNumber);
console.log(object.myFunc(3));
