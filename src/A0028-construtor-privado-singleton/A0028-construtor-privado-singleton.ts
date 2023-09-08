/*eslint-disable*/
//Singleton, padrão de projeto gang of four
export class Database {
  //ATRIBUTO PRIVADO ESTATICO QUE AINDA ASSIM PODE SER ACESSADO FORA DA CLASSE
  private static database: Database;
  //colocar "private" no construtor deve retirar toda a capacidade de criar novas instancias da classe fora dela (estranho, mas OK)
  private constructor(private host: string, private user: string, private password: string) { }
  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }
  //Factory Method - GoF
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log("Retornando instância já criada"); //vai aparecer a partir da asegunda instanciação
      return Database.database
    }
    console.log("Criando nova instância");
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}


const db1 = Database.getDatabase('localhost', 'root', '12345678'); //nova conexão
db1.connect();

const db2 = Database.getDatabase('localhost', 'gpading', '848484'); //nova conexão distinta
db2.connect();

//agora com o padrão usando os métodos static, os objetos serão iguais
console.log(db1 === db2)

