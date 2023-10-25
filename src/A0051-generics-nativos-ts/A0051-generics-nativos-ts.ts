/*eslint-disable*/

//**record <tipo da chave, tipo do valor do objeto>**
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

//**tipo required** = transforma em obrigatorio

type PessoaProtocolOptional = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
}

const objeto2: PessoaProtocolOptional = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
};
//console.log(objeto2);

type PessoaRequired = Required<PessoaProtocolOptional>;
//agora PessoaProtocol é obrigatório

const objeto3: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30, //se tirar, vai dar erro
};

//**tipo partial** = transforma em opcional

type PessoaProtocolRequired = {
  nome: string;
  sobrenome: string;
  idade: number;
}

type PessoaPartial = Partial<PessoaProtocolRequired>;
//agora PessoaProtocolRequired é opcional

const objeto4: PessoaPartial = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
};

//**readonly** = transforma tudo em readonly

type PessoaProtocolNormal = {
  nome: string;
  sobrenome: string;
  idade: number;
}

type PessoaReadonly = Readonly<PessoaProtocolNormal>;

const objeto5: PessoaReadonly = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
//console.log(objeto5)

//objeto5.nome = 'João'; //não pode alterar

//**pick** = pega apenas o que quer de objetos

//só pega nome e idade do PessoaProtocolNormal
type PessoaPick = Pick<PessoaProtocolNormal, 'nome' | 'idade'>;

//**extract e exclude**

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>; //pega tudo o que tá em abc e não tá no cde
type TipoExtract = Extract<ABC, CDE>; //pega intersecção. O que tá em abc e cde

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
}

type AccountAPI = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accoutMongo: AccountMongo = {
  _id: 'asdfasdfasdf',
  nome: 'Luiz',
  idade: 30,
  sobrenome: 'risos risos',
};

function mapAccount(accoutMongo: AccountMongo): AccountAPI {
  const { _id, ...accountData } = accoutMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accoutMongo);
console.log('API: ');
console.log(accountApi);
