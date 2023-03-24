'use strict';

const num = +prompt('Введите число');
if (Number.isNaN(num)) {
    alert('Invalid number');
}
let isPrime = true;
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime);