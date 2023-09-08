/*eslint-disable*/

type TipoDeFuncaoCallback = (item: string) => string;

export function mapStrings(array: string[], callbackfn: TipoDeFuncaoCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]))
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcUpped = mapStrings(abc, item => item.toUpperCase());

console.log(abc);
console.log(abcUpped);
