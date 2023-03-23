'use strict';

const arr = [1, 2, 3, -1, -2, -3];

function getPositiveNumbers(numbers) {
    if (numbers.length === 0) return 'The array is empty!';

    const positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) positiveNumbers.push(numbers[i]);
    }
    return positiveNumbers.length > 0 ? positiveNumbers : null;
}

console.log(getPositiveNumbers(arr));