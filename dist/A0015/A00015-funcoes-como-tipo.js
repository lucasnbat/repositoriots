"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapStrings = void 0;
function mapStrings(array, callbackfn) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callbackfn(array[i]));
    }
    return newArray;
}
exports.mapStrings = mapStrings;
const abc = ['a', 'b', 'c'];
const abcUpped = mapStrings(abc, item => item.toUpperCase());
console.log(abc);
console.log(abcUpped);
