/*eslint-disable*/

type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class VotationGroup {
  private _votationOptions: VotationOption[] = []; //array onde cada indice é descriçãoDaOpção + número de votos
  constructor(public details: string) { }; //frase que descreve a votação

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return; //se não tem a opção de votação, sai da função
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }

  /*
  set votationOptions(votationOptions: VotationOption[]) {
    this._votationOptions = votationOptions;
  }
  */
}

export class VotationApp {
  private votations: VotationGroup[] = []; //array contendo quais são as categorias de votação

  addVotation(votation: VotationGroup): void {
    this.votations.push(votation);
  }

  showVotationGroup(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log('###');
      console.log('');
    }
  }
}

const votacao1 = new VotationGroup('Qual sua linguagem de programação favorita?');
votacao1.addVotationOption({ option: 'Python', numberOfVotes: 0 });
votacao1.addVotationOption({ option: 'JavaScript', numberOfVotes: 0 });
votacao1.addVotationOption({ option: 'TypeScript', numberOfVotes: 0 });
votacao1.vote(0);
votacao1.vote(0);
votacao1.vote(0);
votacao1.vote(1);

const votationApp = new VotationApp();
votationApp.addVotation(votacao1);
votationApp.showVotationGroup();

const votacao2 = new VotationGroup('Qual sua cor preferida risos risos?');
votacao2.addVotationOption({ option: 'Marelo', numberOfVotes: 0 });
votacao2.addVotationOption({ option: 'Vremeio', numberOfVotes: 0 });
votacao2.addVotationOption({ option: 'Rose', numberOfVotes: 0 });
votacao2.vote(0);
votacao2.vote(1);
votacao2.vote(2);

votationApp.addVotation(votacao2);
votationApp.showVotationGroup();
