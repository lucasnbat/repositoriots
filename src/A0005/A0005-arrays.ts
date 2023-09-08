/*eslint-disable*/
export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor, 1)
}
export function concatString(...args: string[]): string { //pode usar Array<String tambem>
  return args.reduce((acumulador, valor) => acumulador + valor)
}

//para aceitar mais de uma string,precisei colocar args como tipo "string[]". 'string' sozinha não funcionou
export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}
const resultadoSoma = multiplyArgs(1, 2, 3);
console.log(resultadoSoma);

const concatenacao = concatString('a', 'b', 'c');
console.log(concatenacao);

const maiuscula = toUpperCase('a', 'b', 'c');
console.log(maiuscula);
