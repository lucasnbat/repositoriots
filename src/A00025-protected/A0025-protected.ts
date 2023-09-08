/*eslint-disable*/

export class Empresa {

  public readonly nome: string;
  //protected deixa os filhos acessarem a superclasse
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  //método redundante mas só para testar get mesmo
  public getNome(): string {
    return this.nome;
  }
}

export class Udemy extends Empresa {
  constructor() { //quando invocar new Udemy() não vai precisar parametro recebido aqui
    super('Udemy', '22.222.222/0002-22') //e vai direito invocar o super (função construtora da super) aqui
  }
  public popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) {
      return colaborador;
    } else {
      return null;
    }
  }
}

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) { }
};

const empresa1 = new Empresa('RISOS RISOS LTDA', '11.111.111/0001-11');
console.log(empresa1);
console.log(empresa1.nome);

const colaborador1 = new Colaborador('Winy', 'Zanin');
const colaborador2 = new Colaborador('Marshall', 'Matters');
const colaborador3 = new Colaborador('Cavalo', 'Manco');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);

//usando structural types: adicionando colaborador na mão
empresa1.adicionaColaborador({ nome: 'Sandero tunado', sobrenome: '2008' })
empresa1.mostrarColaboradores();
console.log("Nome: " + empresa1.getNome());

//testes protected
const u1 = new Udemy();
console.log(u1);
const colaborador4 = new Colaborador('Cacete', 'de agulha');
const colaborador5 = new Colaborador('Não', 'nada a ver');
const colaborador6 = new Colaborador('Irineu', 'você não sabe e nem eu');
u1.adicionaColaborador(colaborador4);
u1.adicionaColaborador(colaborador5);
u1.adicionaColaborador(colaborador6);
console.log(u1)


