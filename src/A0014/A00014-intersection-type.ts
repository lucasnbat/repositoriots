/*eslint-disable*/
//intersecition type envolve você fazer intersecção usando operados &

type TemNome = { nome: string }; //tipos pequenos, facil reutilização
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; //nesse caso, vai criar um tipo com TODOS OS ITENS OBRIGATÓRIOS

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Interseccao = AB & AC; //nesse caso, só vai pegar a interseccção.

const pessoa: Pessoa = {
  nome: 'Lucas',
  sobrenome: 'Nunes Batista',
  idade: 30
}
export { pessoa };
console.log(pessoa);
