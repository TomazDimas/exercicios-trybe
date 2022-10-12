interface Logger {
  log(text: string): void;
}

class ConsoleLogger implements Logger {
  log(text: string): void{
    console.log(`1 ${text}`);
  }
}

class ConsoleLogger2 implements Logger {
  log(text: string): void{
    console.log(`2 ${text}`);
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  save(key: string, value: string): void {
    this.logger.log(`Salvando: ${key} ${value}`);
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const db1 = new ExampleDatabase(logger1);
const db2 = new ExampleDatabase(logger2);
const db3 = new ExampleDatabase();

db1.save('1', 'test1');
db2.save('2', 'test2');
db3.save('3', 'test3');