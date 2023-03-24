'use strict';

const num = +prompt('Введите число');
let isPrime = true;
if (Number.isNaN(num)) {
    isPrime = 'Invalid number';
}
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime);