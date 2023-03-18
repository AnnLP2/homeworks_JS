'use strict';

// Task #1

const result = [];
for (let i = 10; i <= 20; i++) {
    result.push(i);
}
console.log(result.join(', '));

// Task #2
 for (let i = 10; i <= 20; i++) {
     console.log(i * i);
 }

 // let i = 10;
 // while (i <= 20) {
 //     console.log(i * i);
 //     i ++;
 // }

// Task #3

for (let i = 1; i <= 9; i++) {
    const calc = i * 7;
    console.log(`7 * ${i} = ${calc}`);
}

// Task #4

let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
    console.log(sum);

// Task #5

let multiply = 1;
for (let i = 15; i <= 35; i++) {
    multiply *= i;
}
console.log(multiply);

// Task #6
const start = 1;
const end = 500;
let average = 0;
for (let i = start; i <= end; i++) {
    average += i;
}
console.log(average / end);