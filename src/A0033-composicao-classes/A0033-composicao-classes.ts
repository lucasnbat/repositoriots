/*eslint-disable*/
/**
 * Composição é uma relação mais forte entre classes, como humano & coração, carro & motor
 * Simbolo da composição é basicamente o diamante da agregação mas fechado, preenchido;
    * Carro <o>----composto---- Motor
 * A classe vital (motor) é injetada dentro da classe dependente
    * Uma classe DENTRO da outra, a classe MOTOR nao podera ser usada para outra coisa fora da classe carro
*/

export class Carro {
  private readonly motor = new Motor(); //carro cria o seu proprio motor, então ao deletar instancia carro vc deleta a instancia motor junto

  ligar(): void {
    this.motor.ligar();
  }

  desligar(): void {
    this.motor.desligar();
  }

  parar(): void {
    this.motor.parar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }
}

export class Motor {
  ligar(): void {
    console.log("motor ligado...");
  }
  desligar(): void {
    console.log("motor está desligado...");
  }
  acelerar(): void {
    console.log("motor está acelerando...");
  }
  parar(): void {
    console.log("motor está parado");
  }
}
