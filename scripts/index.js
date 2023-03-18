'use strict';

// Task #1
const x = 10;
const y = 7;
const result = x > y ? 'x больше, чем y' : 'x не больше, чем y';
console.log(result);

// Task #2
const number = +prompt('Введите число:');
if (number % 2 === 0) {
    alert(`Число ${number} четное.`);
} else {
    alert(`Число ${number} нечетное.`);
}

// Task #3
const num = +prompt('Введите целое число:');
const numDigits = num.toString().length;

let sign;
if (num > 0) {
    sign = "положительное";
} else if (num < 0) {
    sign = "отрицательное";
} else {
    sign = "ноль";
}

switch (numDigits) {
    case 1:
        alert(`Число ${num} однозначное, ${sign}`);
        break;
    case 2:
        alert(`Число ${num} двузначное, ${sign}`);
        break;
    case 3:
        alert(`Число ${num} трехзначное, ${sign}`);
        break;
    default:
        alert(`Число ${num} имеет ${numDigits}, ${sign}`);
}

// Task  #4
const num1 = +prompt('Введите первое число:');
const num2 = +prompt('Введите второе число:');
const num3 = +prompt('Введите третье число:');
if (num1 >= num2 && num1 >= num3) {
    alert(`Наибольшее число: ${num1}`);
} else if (num2 >= num1 && num2 >= num3) {
    alert(`Наибольшее число: ${num2}`);
} else {
    alert(`Наибольшее число: ${num3}`);
}

// Task #5
const a = +prompt('Введите длину первой стороны:');
const b = +prompt('Введите длину второй стороны:');
const c = +prompt('Введите длину третьей стороны:');
if ((a + b > c) && (b + c > a) && (a + c > b)) {
    alert(`Треугольник с длинами ${a}, ${b} и ${c} может существовать.`);
} else {
    alert(`Такой треугольник не существует!`);
}