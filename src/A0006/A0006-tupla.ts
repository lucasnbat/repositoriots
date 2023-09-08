/*eslint-disable*/
/**
 * Uma tupla é um vetor de tamanho definido com tipos especificos definidos
 */

//para evitar que modifique algum valor da tupla, você usa o readonly
const dadosCliente1: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda'];

//digamos que eu queira deixar um atributo opcional:
const dadosCliente3: [number, string, string?] = [3, 'Lucas'];

//se quero que pegue o restante das coisas como elementos de um array:
const dadosCliente4: [number, string, ...string[]] = [4, 'Ana Júlia', '30 anos', 'Mestra em matemática'];

dadosCliente2[0] = 100;
dadosCliente2[1] = 'Zeca pagodinho';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//array imutavel
const array: readonly string[] = ['Luiz', 'Octavius'];
const array2: ReadonlyArray<string> = ['Victorious', 'Greco'];
console.log(array);
console.log(array2);
