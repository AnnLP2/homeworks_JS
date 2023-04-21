"use strict";

// Task #1
const getFactorial = (n) => {
  return n === 0 ? 1 : n * getFactorial(n - 1);
};

console.log(getFactorial(3));

// Task #2
const pow = (num, degree) => {
  return degree === 1 ? num : num * pow(num, degree - 1);
};

console.log(pow(3, 4));


// Task #3
const sum = (a, b) => {
  if (b === 0) return a;
  return sum(a + 1, b - 1);
};

console.log(sum(10, 7));


