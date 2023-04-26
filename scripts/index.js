"use strict";

const calculator = {
  read() {
    this.a = prompt('Enter the first number');
    this.b = prompt('Enter the second number');
    if (isNaN(+this.a) || this.a === null || this.a.trim() === '')
      throw new Error("Invalid number!");
    if (isNaN(+this.b) || this.b === null || this.b.trim() === '')
      throw new Error("Invalid number!");
  },
  sum() {
    return Number(this.a) + Number(this.b);
  },
  mul() {
    return Number(this.a) * Number(this.b);
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());