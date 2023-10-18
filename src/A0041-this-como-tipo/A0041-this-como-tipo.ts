/*eslint-disable*/

export class Calculadora {
  constructor(public numero: number) { };

  add(n: number): this {
    this.numero += n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }

  mul(n: number): this {
    this.numero *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n; //aqui o this é a instância de SubCalculadora
    return this;
  }
}

const calculadora1 = new SubCalculadora(10);
calculadora1.add(2).mul(1).pow(2);
console.log(calculadora1);
