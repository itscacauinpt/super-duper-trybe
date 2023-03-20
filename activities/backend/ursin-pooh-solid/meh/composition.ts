// Crie uma interface Logger.
// Logger deve possuir um método log, que recebe um parâmetro do tipo string e não retorna nada (void).
interface Logger {
  log(param: string): void, 
}

// Crie uma classe ConsoleLogger que implementa Logger.
// Você deve imaginar como o método log deve ser implementado, né? 😁.
class ConsoleLogger implements Logger {
  public log(value: string): void {
    console.log('ConsoleLogger --> ' + value);
  };
}
// const aLogin = new ConsoleLogger();
// console.log(aLogin);

// Crie uma classe ConsoleLogger2 igual à classe anterior, apenas a título de exemplo.
// No console.log dentro do método log, diferencie o ConsoleLogger2 do ConsoleLogger.
class ConsoleLogger2 implements Logger {
  public log(value: string): void {
    console.log('ConsoleLogger2 --> ' + value);
  };
}
// const aLogin2 = new ConsoleLogger2();
// console.log(aLogin2);

// Crie uma interface Database.
// Database deve possuir um atributo do tipo Logger.
// Database deve possuir um método save, que recebe dois parâmetros,
// key e value, ambos strings, e não retorna nada (void).
interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

// Crie uma classe ExampleDatabase que implementa Database.
// ExampleDatabase deve receber o Logger como parâmetro do construtor,
// e possuir como valor padrão um ConsoleLogger.
// Dentro do método save, chame a função log do Logger passado para o database
// para fazer o log dos parâmetros passados para a save.
class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  public save(key: string, value: string): void {
    this.logger.log(`${key} - ${value}`);
  }
}

// Crie um objeto de cada um dos Loggers.
const aLogin = new ConsoleLogger();
const aLogin2 = new ConsoleLogger2();

// Crie três objetos da ExampleDatabase, cada um dos dois primeiros
// recebendo um dos Loggers, e o último não recebendo nenhum.
const a = new ExampleDatabase(); // padrão
const b = new ExampleDatabase(aLogin);
const c = new ExampleDatabase(aLogin2);

// Utilize todos eles para salvar um conteúdo fictício.
a.save('A', '1');
b.save('B', '2');
c.save('C', '3');
