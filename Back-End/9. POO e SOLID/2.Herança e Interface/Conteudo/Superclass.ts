class Superclass {
  constructor(public isSuper: boolean = true) {}

  protected sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  public sayHello2() {
    console.log(this.sayHello());
  }
}

const myFunc = (superClass: Subclass) => {
  superClass.sayHello2();
}

// const spCls = new Superclass();
const sbClas = new Subclass();

// myFunc(spCls);
myFunc(sbClas);