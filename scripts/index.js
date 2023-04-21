"use strict";

const sum = (function() {
  let num = 0;

  return function fn(n) {
    num = num + n;
    return num;
  };
})();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

