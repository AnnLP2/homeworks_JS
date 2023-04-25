"use strict";

const calculator = {
  read(a, b) {
    if (typeof a !== "number") throw new Error("\"a\" needs to be of type number");
    if (typeof b !== "number") throw new Error("\"b\" needs to be of type number");
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read(3, 4);
alert(calculator.sum());
alert(calculator.mul());