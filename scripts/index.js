'use strict';

//Task #1
const num = +prompt('Enter 1, 2 or 3');

if (num !== 1 && num !== 2 && num !== 3) {
    alert('Failure!');
} else {
    alert('Success!');
}


// Task #2
const numOrStr = prompt('Input number or string');
console.log(numOrStr);

switch(true) {
    case numOrStr === null:
        console.log('You canceled!');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log('Number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}
