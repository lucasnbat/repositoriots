/*eslint-disable*/

export class Empresa {

  public readonly nome: string;
  //private apenas aqui dentro da classe pode ser acessado
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

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

