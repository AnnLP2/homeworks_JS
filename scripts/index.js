'use strict';


const num = prompt('Enter the number');
const exponent = prompt('Enter the pow exponent');
function pow (num, exponent = 1) {
    if (num === null || exponent === null) return 'Some error!';
    if (isNaN(num) || isNaN(exponent)) return 'Some error!';
    return Math.pow(num, exponent);
}
const result = pow(num, exponent);
alert(result);