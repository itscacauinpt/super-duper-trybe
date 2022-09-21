// abstract class Database {
//   abstract connect(): void;
// }

interface Database {
  connect(): void;
}

// class DBmysql extends Database {
  class DBmysql implements Database {
  connect(): void {
    console.log('conectei nomysql');
  }
}

// class DBmongo extends Database {
  class DBmongo implements Database {
  connect(): void {
    console.log('conectei no mongobd');
  }
}

// cant implement an abstract class
// const db = new Database()

const mysql = new DBmysql();
const mongo = new DBmongo();