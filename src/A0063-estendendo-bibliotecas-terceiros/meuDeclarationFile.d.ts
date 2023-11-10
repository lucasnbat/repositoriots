/*eslint-disable */

//configurando o arquivo de declaração de bibliotecas de terceiros

declare namespace _ {
  declare interface LoDashStatic {
    mul(array: number[]): number;
  }
}

declare namespace NodeJS { //merge do meu namespace com o namespace do node
  interface Global {
    minhaglobal: string;
  }
}
