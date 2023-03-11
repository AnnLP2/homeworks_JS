'use strict';
function areEqual(num1, num2) {
   return  num1 === num2;
}
console.log(areEqual(3, 8)); // false
console.log(areEqual(4, 4)); //true

function isSumGreaterThan10(num1, num2) {
    return num1 + num2 > 10;
}
console.log(isSumGreaterThan10(6, 9)); // true
console.log(isSumGreaterThan10(2, 4)); //false

function isNegativeNumber(num) {
    return num < 0;
}
console.log(isNegativeNumber(-8)); // true
console.log(isNegativeNumber(5)); //false