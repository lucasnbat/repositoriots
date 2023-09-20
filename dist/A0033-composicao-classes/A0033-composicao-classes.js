"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = exports.Carro = void 0;
class Carro {
    constructor() {
        this.motor = new Motor();
    }
    ligar() {
        this.motor.ligar();
    }
    desligar() {
        this.motor.desligar();
    }
    parar() {
        this.motor.parar();
    }
    acelerar() {
        this.motor.acelerar();
    }
}
exports.Carro = Carro;
class Motor {
    ligar() {
        console.log("motor ligado...");
    }
    desligar() {
        console.log("motor está desligado...");
    }
    acelerar() {
        console.log("motor está acelerando...");
    }
    parar() {
        console.log("motor está parado");
    }
}
exports.Motor = Motor;
