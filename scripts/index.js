"use strict";
const mainFunction = (callback) => {
  const num1 = +prompt("Enter the first number");
  const num2 = +prompt("Enter the second number");
  return callback(num1, num2);
};
const exponentiation = (a, b) => a ** b;
const resultExpo = mainFunction(exponentiation);

alert(`The result of exponentiation: ${resultExpo}`);

const multiply = (a, b) => a * b;
const resultMulti = mainFunction(multiply);

alert(`The result of multiply: ${resultMulti}`);

const division = (a, b) => a / b;
const resultDiv = mainFunction(division);

alert(`The result of division: ${resultDiv}`);

const modulo = (a, b) => a % b;
const resultMod = mainFunction(modulo);

alert(`The result of the remainder of the division: ${resultMod}`);