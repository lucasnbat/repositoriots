/*eslint-disable*/

//class é um TIPO, também. Ou seja, Empresa agora é um tipo que pode ser usado no programa!!
//classe exportavel, para poder ser acessada fora do modulo
export class Empresa {
  //atributo acessivel por fora da classe e readonly
  public readonly nome: string; //você pode simplesmente não falar public que o atributo ja sera publico por inferencia
  private readonly colaboradores: Colaborador[] = []; //pode iniciar vazio, vai começar a checar usando a classe conforme o primeiro atributo for adicionado --> para deixar array[] estático, coloque readonly antes de "colaboradores". Assim ele só podera ser lido, não pode dar nem push()
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome; //this se refere ao objeto. To dando o que o constructor receber para o atributo nome do objeto empresa;
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void { //veja eu usando classe como tipo aqui
    this.colaboradores.push(colaborador); //aqui ele pega o vetor de colaboradores e insere o valor que passei para o metodo
  }

  public mostrarColaboradores(): void { //nao tem "return", só um console.log
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  //forma resumida de criar classe e atributos
  //essa linha de construtor: 1. já cria o atributo, 2. já cria o valor recebido pelo construtor (linha 11) e já define um this.atributo = atributo
  constructor(public readonly nome: string, public readonly sobrenome: string) { }
};

const empresa1 = new Empresa('RISOS RISOS LTDA', '11.111.111/0001-11');
console.log(empresa1); //ta readonly na estrutura do atributo, não é possível setar outro valor ao atributo
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
