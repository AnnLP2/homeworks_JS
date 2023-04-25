"use strict";

const getPalindrome = (number, steps = 0) => {
  if (number < 0) return false;
  if (number % 10 === 0) return false;

  const reversedNumber = Number(number.toString().split("").reverse().join(""));

  if (isPalindrome(number)) {
    return { result: number, steps: steps };
  } else {
    steps++;
    number += reversedNumber;
    return getPalindrome(number, steps);
  }
};

const isPalindrome = (num) => num.toString() === num.toString().split("").reverse().join("");

console.log(getPalindrome(96));

