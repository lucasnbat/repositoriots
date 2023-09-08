/*eslint-disable*/
//tipos mais básicos do typescript (com eles ocorre inferencia, dedução de quais são os tipos sem as vezes precisar declarar)
let nome = 'Luiz';
let idade: number = 30;
let adulto: boolean = true; //true ou false (nao pode 0 e 1)
let simbolo: symbol = Symbol('qualquer-symbol');
//let big: bigint = 10n;

/**
 * Geralmente os tipos primitivos são todos colocados com letra minuscula
 * Os tipos que vc cria aí bota letra maiuscula (alguns prmitivos tem letra maisucula iniciando, como Array<T>)
 * Tem tipos undefined, null, etc
 * Qualquer tipo de numero (int, float, positivos oou não, hecadecimal, octal, tudo é tipo NUMBER)
 */

//Arrays
//Veja que o tipo gerenerio Array reclama pedindo um tipo (como se fosse função)
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];
let arrayOfStrings: Array<string> = ['Ana Júlia', 'Pedro', 'Maria Clara'];
let arrayOfStrings2: string[] = ['Ana Júlia', 'Pedro', 'Maria Clara'];

//Objetos
//quando coloco "?:" isso indica que é um atributo OPCIONAL
let pessoa: { nome: string, idade: number, adulto_opcional?: boolean } = {
  idade: 30,
  nome: 'Luiz'
}

console.log(pessoa.nome);

//funções
//deixando inferir o return:
function soma(x: number,y: number){
  return x + y; //coloque o mouse agr sobre 'soma' e veja que ele ja infere que o retorno é number
}
const result = soma(2,2); //ele infere também o tipo de retorno de uma varivel que recebe a função

//especificando o return (veja que depois de 'u' eu to especificando o tipo de retorno da função):
function sub(z: number, u: number): number {
  return z - u;
}
//especificando o esqueleto do tipo
const soma2: (x: number, y: number) => number = (x,y) => x + y;

/**
 * Boa prática com tipos: você começa codando o trecho e, se você ver que ele inferiu errado (any), aí coloca o tipo que deseja
 */
