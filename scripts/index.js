"use strict";

const getRandom = (function() {
  const usedNums = [];

  const genRandomNum = () => Math.floor(Math.random() * 100) + 1;
  return function() {
    let randomNum = genRandomNum();
    if (usedNums.length >= 100) return NaN;
    while (usedNums.includes(randomNum)) {
      randomNum = genRandomNum();
    }
    usedNums.push(randomNum);
    return randomNum;
  };
})();

console.log(getRandom());
console.log(getRandom());
console.log(getRandom());
console.log(getRandom());
console.log(getRandom());






