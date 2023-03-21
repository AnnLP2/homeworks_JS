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
    const result = i * 7;
    console.log(`7 * ${i} = ${result}`);
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

// Task #7
let sumOfEvenNumbers = 0;
for (let i = 30; i <= 80; i += 2) {
    sumOfEvenNumbers += i;
}
console.log(sumOfEvenNumbers);

// Task #8
for (let i = 100; i <= 200; i ++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Task #9
const num = Math.floor(Math.random() * 100) + 1;
const divisors = [];
for (let i = 1; i <= num; i ++) {
    if (num % i === 0){
        divisors.push(i);
    }
}
console.log(`Divisors of ${num}: ${divisors.join(', ')}`);

// Task #10
const evenDivisors = [];
for (let i = 1; i <= divisors.length; i ++) {
    if (divisors[i] % 2 === 0) {
        evenDivisors.push(divisors[i]);
    }
}
console.log(`The quantity of even divisors of ${num}: ${evenDivisors.length}, namely: ${evenDivisors.join(', ')}`);

// Task #11
let sumOfEvenDivisors = 0;
for (let i = 1; i <= divisors.length; i ++) {
    if (divisors[i] % 2 === 0) {
        sumOfEvenDivisors += divisors[i];
    }
}
console.log(`Sum of even divisors: ${sumOfEvenDivisors}`);

// Task #12
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        const multiplyTable = i * j;
        console.log(`${i} * ${j} = ${multiplyTable}`);
    }
}