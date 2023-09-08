/*eslint-disable*/
function semRetorno(...args: string[]): void { //determinando que função deve ser do tipo void
  console.log(args.join(' '));
}
semRetorno('Lucas', 'Nunes');

const pessoa = {
  nome: 'Ana',
  sobrenome: 'Julia',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  }
}
export { pessoa }

pessoa.exibirNome();
