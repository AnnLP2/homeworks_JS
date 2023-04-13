"use strict";

//Task #1
const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
const sum = arr.reduce((acc, num) => num > 0 ? acc + num : acc);
const positiveCount = arr.reduce((acc, num) => num > 0 ? acc + 1 : acc);

console.log(positiveCount);
console.log(sum);

//Task #2
const minElement = arr.reduce((acc, num) => num < acc ? num : acc);
const minElementIndex = arr.indexOf(minElement);

console.log(minElement);
console.log(minElementIndex);

//Task #3
const maxElement = arr.reduce((acc, num) => num > acc ? num : acc);
const maxElementIndex = arr.indexOf(maxElement);

console.log(maxElement);
console.log(maxElementIndex);

//Task #4
const negativeNumbersCount = arr.filter(num => num < 0).length;
console.log(negativeNumbersCount);

//Task #5
const positiveOddNumbersCount = arr.filter(num => num % 2 !== 0 && num > 0).length;
console.log(positiveOddNumbersCount);

//Task #6
const positiveEvenNumbersCount = arr.filter(num => num % 2 === 0 && num > 0).length;
console.log(positiveEvenNumbersCount);

//Task #7
const positiveEvenNumbersSum = arr.filter(num => num % 2 === 0 && num > 0).reduce((acc, num) => acc + num);
console.log(positiveEvenNumbersSum);

//Task #8
const positiveOddNumbersSum = arr.filter(num => num % 2 !== 0 && num > 0).reduce((acc, num) => acc + num);
console.log(positiveOddNumbersSum);

//Task #9
const positiveNumbersProduct = arr.filter(num => num > 0).reduce((acc, num) => acc * num);
console.log(positiveNumbersProduct);

//Task #10
const maxNumber = arr.reduce((acc, num) => acc > num ? acc : num);
const maxAndZeroesArr = arr.map(num => num === maxNumber ? num : 0);
console.log(maxAndZeroesArr);

