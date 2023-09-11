/*eslint-disable*/

//ASSOCIAÇÃO

/*
 * Associação de classes é representada por:
    * Traço sem seta
    * Traço com seta de escritor para ferramenta indicando que escritor usa ferramenta
 * Ligo Escritor a classe abstrata ferramenta, então qualquer ferramenta vai servir para o escritor
 * A relação associação não indica dependencia, então escritor pode existir sozinho e ferramenta pode existir sem escritor
 */

export class Escritor {
  private _ferramenta: Ferramenta | null = null; //ferramenta pode existir ou não (null), ela não é obrigatoria pra escritor exisitr
  constructor(private _nome: string) { }

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta == null) {
      console.log("Não posso escrever sem ferramenta");
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) { }
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }

}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`)
  }
}

const escritor1 = new Escritor('Lucas');
const caneta1 = new Caneta('Bic');
const maquinaEscrever1 = new MaquinaEscrever('MaquinaIBM');

//agora veja eu chamando o get implicitamente aqui

console.log(escritor1.nome);
console.log(caneta1.nome);
console.log(maquinaEscrever1.nome);

//usando setter para definir ferramenta do escritor1
escritor1.ferramenta = caneta1;
escritor1.escrever();

//agora vou tirar a caneta

escritor1.ferramenta = null;
escritor1.escrever();
