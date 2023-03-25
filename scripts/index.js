'use strict';

const num = +prompt('Enter the number');
function getMinDivisor(num) {
    if(num < 1) return NaN;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return i;
    }
    return num;
}

console.log(getMinDivisor(num));


// const num = +prompt("Enter the number");
// let minDivisor = num;
// if (num < 1) {
//     minDivisor = NaN;
// }
// for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//         minDivisor = i;
//         break;
//     }
// }
//
// console.log(minDivisor);

