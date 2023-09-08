/*eslint-disable*/
type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade; //usando tipo dentro de um tipo
  salario: number;
  corPreferida?: string;
}
//type alias
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

//union types
type CorPreferida = CorRGB | CorCMYK; //corpreferida é a uniao de todas as opções de corrgb e corcmyk. Isso é UNION TYPES

const pessoa: Pessoa = {
  nome: 'Eliziane',
  idade: 30,
  salario: 200_000, //isso é a mesma coisa que 200 mil. 200.000. Pode separar com underline
};

export function setCorPreferida (pessoa: Pessoa, cor: CorPreferida): Pessoa{
  return { ...pessoa, corPreferida: cor}; //retorna um novo objeto  ja com a cor
}

console.log(setCorPreferida(pessoa, 'Vermelho'));
console.log(pessoa);
