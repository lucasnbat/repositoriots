/*eslint-disable*/

//Interfaces tem essa vantagem: podemos criar interfaces com o mesmo nome, e o TS vai fazer o merge delas
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string; //não é possível alterar o valor
}

interface Pessoa {
  readonly enderecos: readonly string[]; //não é possível alterar o valor e nem o array
}

interface Pessoa {
  idade?: number; //isso ?: indica que o atributo é opcional para se colocar no objeto, TS deduz que pode ser number ou undefined
}

interface Pessoa {
  readonly feliz?: boolean; //veja que mesmo propriedade sendo opcional você pode fazer, caso ela exista no objeto, ser readonly apenas
}

const p1: Pessoa = {
  nome: 'Lucas',
  sobrenome: 'Bertoncello',
  enderecos: ['Av. Brasil'],
}

console.log(p1);
