'use strict';


const mainFunction = (callback) => {
    const num1 = prompt('Enter the first number');
    const num2 = prompt('Enter the second number');
    return callback(num1, num2);

}

//Callback function exponentiation
const exponentiation = (a, b) => {
    const result = a ** b;
    alert(`The result of exponentiation: ${result}`);
    return result;
}

mainFunction(exponentiation);

//Callback function multiply
const multiply = (a, b) => {
    const result = a * b;
    alert(`The result of multiply: ${result}`);
    return result;
}

mainFunction(multiply);

//Callback function division
const division = (a, b) => {
    const result = a / b;
    alert(`The result of division: ${result}`);
    return result;
}

mainFunction(division);


//Callback function modulo
const modulo = (a, b) => {
    const result = a % b;
    alert(`The result of the remainder of the division : ${result}`);
    return result;
}

mainFunction(modulo);