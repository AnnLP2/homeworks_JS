'use strict';

// Task #1
console.log(Boolean(Number('10')) + 1); // true + 1 => 1 + 1 = 2
console.log('sub ' + Number(false)); // sub 0
console.log(16  *  '      91    '); // 1456
console.log(true - 70); // -69
console.log(Number(1 + String(1)) + 1); // 12

// Task #2

const hours = +prompt("Please, enter the number of hours");
const secInHours = hours * 60 * 60;
if (!isNaN(hours)) {
    alert(`In ${hours} hours there are ${secInHours} seconds.`);
} else {
    alert(`Please, write just a valid number.`);
}

// Task #3

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num ++;
num --;
alert(num); // -0.7142857142857143
