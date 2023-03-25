'use strict';

function fib(n = 1) {
    const sequenceFibonacci = [0, 1];
    for (let i = 2; i <= n; i++) {
        const fibNumber = sequenceFibonacci[i - 2] + sequenceFibonacci[i - 1];
        sequenceFibonacci.push(fibNumber);
    }
    return sequenceFibonacci[n];
}

console.log(fib(9)); // 34

