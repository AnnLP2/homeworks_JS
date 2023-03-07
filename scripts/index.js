'use strict';
const operation = prompt("What do you want to do: + (add), - (sub), * (mult) or / (div)?");
const firstNumber = Number(prompt("Please, write first number"));
const secondNumber = Number(prompt("Please, write second number"));
let result;

if (operation === '+' || operation === 'add') {
    result = firstNumber + secondNumber;
}
else if (operation === '-' || operation === 'sub') {
    result = firstNumber - secondNumber;
}
else if (operation === '*' || operation === 'mult') {
    result = firstNumber * secondNumber;
}
else if (operation=== '/' || operation === 'div') {
    result = firstNumber / secondNumber;
}
else {
    alert("Incorrect operation!");
}

if (!isNaN(result)) {
    alert(`Result: ${firstNumber} ${operation} ${secondNumber} = ${result}`);
} else {
    alert("I can't count it =(");
}