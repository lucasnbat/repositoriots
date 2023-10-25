/*eslint-disable*/

// Type predicate
// Type predicate é uma forma de definir o tipo de retorno de uma função. O boolean é óbvio que vai retornar, então só lanço ali que vai ser um number
//quando retornar boolean...value será um number
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

console.log(isNumber('123'));
console.log(isNumber(123));

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma([1, 2, 4, 'a', 'b', 'c'])); //T = string | number
console.log(soma(1, 2, 3)); //T = number
console.log(soma('a', 'b', 'c')); //T = string
