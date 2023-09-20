"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
class Database {
    constructor(host, user, password) {
        this.host = host;
        this.user = user;
        this.password = password;
    }
    connect() {
        console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
    }
    static getDatabase(host, user, password) {
        if (Database.database) {
            console.log("Retornando instância já criada");
            return Database.database;
        }
        console.log("Criando nova instância");
        Database.database = new Database(host, user, password);
        return Database.database;
    }
}
exports.Database = Database;
const db1 = Database.getDatabase('localhost', 'root', '12345678');
db1.connect();
const db2 = Database.getDatabase('localhost', 'gpading', '848484');
db2.connect();
console.log(db1 === db2);
