"use strict";

//Task #1
const arrPart1 = [1, 2, 3];
const arrPart2 = [4, 5, 6];
const combArr = [...arrPart1, ...arrPart2];
console.log(combArr);

//Task #2
const arr2 = [1, 2, 3];
const revArr = arr2.reverse();
console.log(revArr);

//Task #3
const arr3 = [1, 2, 3];
arr3.push(4, 5, 6);
console.log(arr3);

//Task #4
const arr4 = [1, 2, 3];
arr4.unshift(4, 5, 6);
console.log(arr4);

//Task #5
const arr5 = ["js", "css", "jq"];
console.log(arr5[0]);

//Task #6
const arr6 = ["js", "css", "jq"];
console.log(arr6[arr6.length - 1]);

//Task #7
const arr7 = [1, 2, 3, 4, 5];
const newArr7 = arr7.slice(0, 3);
console.log(newArr7);

//Task #8
const arr8 = [1, 2, 3, 4, 5];
const newArr8 = arr8.slice(-2);
console.log(newArr8);

//Task #9
const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);
console.log(arr9);

//Task #10
const arr10 = [1, 2, 3, 4, 5];
const newArr10 = arr10.splice(1, 3);
console.log(newArr10);

//Task #11
const arr11 = [1, 2, 3, 4, 5];
arr11.splice(3, 0, "a", "b", "c");
console.log(arr11);

//Task #12
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, "a", "b");
arr12.splice(6, 0, "c");
arr12.push("e");
console.log(arr12);

//Task #13
const arr13 = [3, 4, 1, 2, 7];
arr13.sort();
console.log(arr13);

// Task #14
const arr14 = [5, 6, 7, 8, 9];
const sum = arr14.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

// const arr14 = [5, 6, 7, 8, 9];
// let sum = 0;
// for (let i = 0; i < arr14.length; i++) {
//   sum += arr14[i];
// }
//
// console.log(sum);

// Task #15
const arr15 = [5, 6, 7, 8, 9];
const squares = arr15.map(num => num ** 2);

console.log(squares);

// const arr15 = [5, 6, 7, 8, 9];
// for (let i = 0; i < arr15.length; i++) {
//   arr15[i] = arr15[i] ** 2;
// }
//
// console.log(arr15);

// Task #16
const arr16 = [1, -3, 5, 6, -7, 8, 9, -11];
const negativeNumbers = arr16.filter(num => num < 0);

console.log(negativeNumbers);

// const arr16 = [1, -3, 5, 6, -7, 8, 9, -11];
// for (let i = arr16.length -1; i >= 0; i--) {
//   if (arr16[i] > 0) {
//     arr16.splice(i, 1);
//   }
// }
//
// console.log(arr16);

// Task #17
const arr17 = [1, -3, 5, 6, -7, 8, 9, -11];
const evenNumbers = arr17.filter(num => num % 2 === 0);

console.log(evenNumbers);

// const arr17 = [1, -3, 5, 6, -7, 8, 9, -11];
// for (let i = arr17.length - 1; i >= 0; i--) {
//   if (arr17[i] % 2 !== 0) {
//     arr17.splice(i, 1);
//   }
// }
//
// console.log(arr17);

//Task #18
const arr18 = ["aaa", "aaaqqq", "zzzqq", "zz", "qsaa", "q", "az"];
const filteredArr = arr18.filter(item => item.length > 5);

console.log(filteredArr);

// const arr18 = ["aaa", "aaaqqq", "zzzqq", "zz", "qsaa", "q", "az"];
// for (let i = arr18.length - 1; i >= 0; i--) {
//   if (arr18[i].length <= 5) {
//     arr18.splice(i, 1);
//   }
// }
//
// console.log(arr18);

//Task #19
const arr19 = [1, 2, [3, 4], 5, [6, 7]];
const subArrays = arr19.filter(item => Array.isArray(item));
console.log(subArrays);

// const arr19 = [1, 2, [3, 4], 5, [6, 7]];
// for (let i = arr19.length - 1; i >= 0; i--) {
//   if (!Array.isArray(arr19[i])) {
//     arr19.splice(i, 1);
//   }
// }
//
// console.log(arr19);

//Task #20
const arr20 = [5, -3, 6, -5, 0, -7, 8, 9];
const count = arr20.filter(num => num < 0).length;

console.log(count);

// const arr20 = [5, -3, 6, -5, 0, -7, 8, 9];
// let count = 0;
// for (let i = 0; i < arr20.length; i++) {
//   if (arr20[i] < 0) {
//     count++;
//   }
// }
//
// console.log(count);
