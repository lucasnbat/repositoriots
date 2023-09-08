/*eslint-disable*/
export class Personagem {
  constructor(protected nome: string, protected ataque: number, protected vida: number) { }

  //não posso usar 'this.perderVida()' porque se não a vida vai ser tirada do proprio personagem que está atacando
  atacar(personagem: Personagem): void {
    console.log(`${this.nome} está atacando...`)
    this.bordao();
    personagem.perderVida(this.ataque); //vai perder vida na quantidade de força de ataque que vier
  }
  //se não tem public antes, metodo ja é publico
  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`Agora ${this.nome} tem ${this.vida} pontos de vida`);
  }

  bordao(): void {
    console.log("GRITO DE GUERRA")
  }

}

//criei outras classes aqui
export class Guerreira extends Personagem {
  bordao(): void {
    console.log("GRITO DE GUERRA DA GUERREIRA")
  }
}
export class Monstro extends Personagem {}

const guerreira = new Guerreira('Joana', 100, 1000);
const monstro = new Monstro('Megazord', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
