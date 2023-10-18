/*eslint-disable*/

type Adder = {
  //overload = retornar diferentes coisas conforme qtd de parametros recebidos
  (x: number): number; //pode receber so um numero
  (x: number, y: number): number; //pode receber dois numeros
  (...arg: number[]): number; //pode receber varios numeros
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
}

console.log(adder(1, 2, 3))
