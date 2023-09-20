"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monstro = exports.Guerreira = exports.Personagem = void 0;
class Personagem {
    constructor(nome, ataque, vida) {
        this.nome = nome;
        this.ataque = ataque;
        this.vida = vida;
    }
    atacar(personagem) {
        console.log(`${this.nome} está atacando...`);
        this.bordao();
        personagem.perderVida(this.ataque);
    }
    perderVida(forcaAtaque) {
        this.vida -= forcaAtaque;
        console.log(`Agora ${this.nome} tem ${this.vida} pontos de vida`);
    }
}
exports.Personagem = Personagem;
class Guerreira extends Personagem {
    constructor() {
        super(...arguments);
        this.emoji = '\u{1F9DD}';
    }
    bordao() {
        console.log(this.emoji + "GRITO DE GUERRA DA GUERREIRA");
    }
}
exports.Guerreira = Guerreira;
class Monstro extends Personagem {
    constructor() {
        super(...arguments);
        this.emoji = '\u{1F9DF}';
    }
    bordao() {
        console.log(this.emoji + "GRITO DE GUERRA DO MONSTRO");
    }
}
exports.Monstro = Monstro;
const guerreira = new Guerreira('Joana', 100, 1000);
const monstro = new Monstro('Megazord', 87, 1000);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
