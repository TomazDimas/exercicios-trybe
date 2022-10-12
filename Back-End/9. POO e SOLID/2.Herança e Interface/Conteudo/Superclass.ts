class Superclass {
  constructor(public isSuper: boolean = true) {}

  public sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super(false);
  }
}

const myFunc = (superClass: Superclass) => {
  console.log(superClass.isSuper ? 'Super!' : 'Sub!');
}

const spCls = new Superclass();
const sbClas = new Subclass();

myFunc(spCls);
myFunc(sbClas);