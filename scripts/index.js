'use strict';

function padString(string, length, symbol, right = true) {
    if (typeof string !== 'string') {
        return 'Argument "string" must be of type string';
    }
    if (typeof length !== 'number') {
        return 'Argument "length" must be of type number';
    }
    if (string.length >= length) {
        return string.substring(0, length);
    }
    if (typeof symbol !== 'string' || symbol.length !== 1) {
        return 'Argument "symbol" must be of type string and contain only one character';
    }
    if (typeof right !== 'boolean') {
        return 'Argument "right" must be of type boolean';
    }

    const pattern = symbol.repeat(length - string.length);
    return right ? `${string}${pattern}` : `${pattern}${string}`;

}

console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));