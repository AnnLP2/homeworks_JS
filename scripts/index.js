'use strict';
const a = Number(prompt ("First number"));
const b = Number(prompt ("Second number"));
function add (a, b) {
    console.log(`Result: ${a} + ${b} = ${a + b}`);
}
function subtract (a, b) {
    console.log(`Result: ${a} - ${b} = ${a - b}`);
}
function multiply (a, b) {
    console.log(`Result: ${a} * ${b} = ${a * b}`);
}
function divide (a, b) {
    console.log(`Result: ${a} / ${b} = ${a / b}`);
}
add(a, b);
subtract(a, b);
multiply(a, b);
divide(a, b);