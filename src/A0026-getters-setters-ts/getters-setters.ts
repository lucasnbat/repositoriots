/*eslint-disable*/

//ALUNO "É UMA" PESSOA
//CLIENTE "É UMA" PESSOA --> relação É UM
export class Pessoa {
  constructor(private nome: string, private _sobrenome: string, private idade: number, private cpf: string) {
    this.sobrenome = _sobrenome; //chamando setter diretamente aqui (formato padrão)
    //como isso funciona? ora, o atributo sobrenome existe porque ele vem do setter (lembre que set se comporta como atributo)
    //dessa forma, eu to invocando o setter e passando para ele o valor _sobrenome orignial que passei para o construtor
    //nesse caso, o "valor" recebido pelo setter é o proprio valor orginial inicial do construtor ('_sobrenome')
  }


  //forma moderna: vai precisar colocar _ antes do atributo com o valor no construtor principal e vai precisar ir no set e tirar o retorno void
  //esse get e set se comportam como se fossem atributos. Veja os casos nas linhas 13 e 17
  get sobrenome(): string { //para invocar, use pessoa.sobrenome (como se estivesse invocando um atributo)
    console.log("GETTER CHAMADO");
    return this._sobrenome;
  }

  set sobrenome(sobrenome: string) { //para invocar, use o "=". Ex: pessoa.sobrenome = 'Medeiros'
    console.log('SETTER CHAMADO');
    this._sobrenome = sobrenome;
  }

  //forma antiga
  public getCpf(): string {
    return this.cpf.replace(/\D/g, ''); //substituindo tudo que nao for numero por nada ali --> regex
  }

  public setCpf(cpf: string): void {
    this.cpf = cpf;
    //veja que nao retorna nada, por isso "void"
  }

}

const pessoa1 = new Pessoa('Winy', 'Zanin', 23, '000111222-22'); //aqui acontece o 1o setter
pessoa1.sobrenome = 'Risos Risos'; //aqui o 2o setter
console.log("Imprimindo getter: " + pessoa1.sobrenome);

