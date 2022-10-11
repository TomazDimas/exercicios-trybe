class Superclass {
  constructor(public isSuper: boolean = true) {}

  public sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {}

const myFunc = (superClass: Superclass) => {
  superClass.sayHello();
}

const spCls = new Superclass();
const sbClas = new Subclass();

myFunc(spCls);
myFunc(sbClas);