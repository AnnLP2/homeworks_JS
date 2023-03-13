'use strict';

const a = 0;
//#1
console.log(a === 0 ? 'Верно' : 'Неверно');
//#2
console.log(a > 0 ? 'Верно' : 'Неверно');
//#3
console.log(a < 0 ? 'Верно' : 'Неверно');
//#4
console.log(a >= 0 ? 'Верно' : 'Неверно');
//#5
console.log(a <= 0 ? 'Верно' : 'Неверно');
//#6
console.log(a !== 0 ? 'Верно' : 'Неверно');
//#7
console.log(a.toString() === 'test' ? 'Верно' : 'Неверно');
//#8
console.log(a.toString() === '1' ? 'Верно' : 'Неверно');
//#9
console.log(a > 0 && a < 5 ? 'Верно' : 'Неверно');
//#10
console.log(a === 0 || a === 2 ? (a + 7) : (a / 10));
//#11
const b =7;
console.log(a <= 1 && b >= 3 ? (a + b) : (a - b));
//#12
console.log(a > 2 && a < 11 || b >= 6 && b < 14 ? 'Верно' : 'Неверно');
//#13
let num = 4;
let result;

switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'лето';
        break;
    case 4:
        result = 'осень';
        break;
    default:
        result = 'неизвестно';
}
console.log(result);

