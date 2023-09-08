/*eslint-disable*/
/**
 * A Classe personagem só serve para ser herdada, não pode ser instanciada;
 * Logo, ela é uma classe abstrata;
 * Então ao definir ela como abstract eu tenho que:
    * 1. ela não pode ser instanciada,
    * 2. ela só pode ser herdada para gerar classes filhas (também chamadas de concretas)
 */
export abstract class Personagem {
  protected abstract emoji: string; //atributo abstrato que tambem só sera implementado nas classes filhas/ concretas
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

  //veja agora que eu declarei o metodo bordao como abstrato pois ele só servirá para as classes filhas implementarem
  //ele não pode ter corpo, pois é só uma assinatura, algo que será implementado nas classes filhas concretas
  abstract bordao(): void;

}

//criei outras classes aqui
export class Guerreira extends Personagem {
  protected emoji =  '\u{1F9DD}';
  bordao(): void {
    console.log(this.emoji + "GRITO DE GUERRA DA GUERREIRA")
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + "GRITO DE GUERRA DO MONSTRO")
  }
}

const guerreira = new Guerreira('Joana', 100, 1000);
const monstro = new Monstro('Megazord', 87, 1000);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);

