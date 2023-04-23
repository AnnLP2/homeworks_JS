"use strict";

const findPalindrome = (number) => {
  let steps = 0;
  debugger
  while (true) {
    steps++;
    let reversedNumber = number.toString().split("").reverse().join("");
    let sum = number + Number(reversedNumber);
    if (isPalindrome(sum)) {
      return { result: sum, step: steps };
    }
    number = sum;
  }
};

const isPalindrome = (num) => {
  let str = num.toString();
  if (str.length === 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
};

console.log(findPalindrome(96));