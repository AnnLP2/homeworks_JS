'use strict';

const num = +prompt('Enter the number');
const exponent = +prompt('Enter the pow exponent');
function pow (num, exponent = 1) {
    return !isNaN(num) && !isNaN(exponent) ? Math.pow(num, exponent) : 'Some error!';
}
const result = pow(num, exponent);
alert(result);