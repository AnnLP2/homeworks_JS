'use strict';

const num = +prompt("enter number");
let minDivisor = num;
if (num < 1) {
    minDivisor = NaN;
}
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        minDivisor = i;
        break;
    }
}

console.log(minDivisor);