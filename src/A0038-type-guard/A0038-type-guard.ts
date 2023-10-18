/*eslint-disable*/

//função do type guard é refinar os tipos, ou seja, validar se o tipo é o que se espera

export default function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return `${a}${b}`;
  }
}

console.log(add(1, 5)); // 6
console.log(add('a', 'b')); // ab

type Pessoa = { tipo: 'pessoa', nome: string }; //aqui o primeiro atributo é um tipo literal
type Animal = { tipo: 'animal', cor: string };
type PessoaOuAnimal = Pessoa | Animal;
class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) { }
}
//alerta: não é possível usar type guard validando qual é o tipo, pois o tipo NÃO É COMPILADO para JS
function mostrarNome(objeto: PessoaOuAnimal): void {
  //if ('nome' in objeto) { //validando se existe o atributo nome no objeto inserido na função
  //  console.log(objeto.nome);
  //}
  //if (objeto instanceof Aluno) { console.log(objeto.nome) };
  switch (objeto.tipo) {
    case 'pessoa':
      console.log(objeto.nome);
      return;
    case 'animal':
      console.log('Gagagaga isso é um animal, e um animal ' + objeto.cor);
      return;
  }
}
const aluno1 = new Aluno('Amabile');
mostrarNome(aluno1);
mostrarNome({ tipo: 'animal', cor: 'RISOS RISOS' });




