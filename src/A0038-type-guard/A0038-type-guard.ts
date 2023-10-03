/*eslint-disable*/
function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return `${a}${b}`;
  }
}

console.log(add(1, 5)); // 6
console.log(add('a', 'b')); // ab
