// 'use strict';
//
// // Task #1
//
// const result = [];
// for (let i = 10; i <= 20; i++) {
//     result.push(i);
// }
// console.log(result.join(', '));
//
// // Task #2
//  for (let i = 10; i <= 20; i++) {
//      console.log(i * i);
//  }
//
//  // let i = 10;
//  // while (i <= 20) {
//  //     console.log(i * i);
//  //     i ++;
//  // }
//
// // Task #3
//
// for (let i = 1; i <= 9; i++) {
//     const calc = i * 7;
//     console.log(`7 * ${i} = ${calc}`);
// }
//
// // -----------------------------Task #4-----------------------------------
//
// let sum = 0;
// for (let i = 1; i <= 15; i++) {
//     sum += i;
// }
//     console.log(sum);
//
// // Task #5
//
// let multiply = 1;
// for (let i = 15; i <= 35; i++) {
//     multiply *= i;
// }
// console.log(multiply);
//
// // Task #6
// const start = 1;
// const end = 500;
// let average = 0;
// for (let i = start; i <= end; i++) {
//     average += i;
// }
// console.log(average / end);
//
// // Task #7
// let sum = 0;
// for (let i = 30; i <= 80; i += 2) {
//     sum += i;
// }
// console.log(sum)
//
// // Task #8
// for (let i = 100; i <= 200; i ++) {
//     if (i % 3 === 0) {
//         console.log (i);
//     }

// Task #9
// let n;
// n = 4
// for (let i = 1; i <= 9; i ++) {
//     if (n % i === 0){
//         console.log(i)
//     }
// }

// Task #10
let n;
n = 3
const pairedQuantity = []
for (let i = 1; i <= 9; i ++) {
    if (((n % i === 0) % 2) === 0){
        pairedQuantity.push(i)
    }
}
console.log(pairedQuantity.length)