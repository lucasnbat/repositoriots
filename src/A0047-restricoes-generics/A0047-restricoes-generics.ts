/*eslint-disable*/

//veja que os tipos genericos agora estão depois do "=";
//isso significa que serão detectados ao instanciar a função;
// o K extends keyof O significa que o tipo K pode ser no máximo uma chave de O;
type ObterChaveFn = <O, K extends keyof O> (objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina 1', 'Vacina 2'],
  idade: 10,
}

const vacinas = obterChave(animal, 'vacinas');
console.log(vacinas);

const cores = obterChave(animal, 'cor');
console.log(cores);
