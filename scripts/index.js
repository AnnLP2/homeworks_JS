"use strict";

//Task #1
const arr = ["a", "b", "c", "d"];
const str = arr.slice(0, 2).join("+") + ", " + arr.slice(2).join("+");
console.log(str);

//Task #2
const arr2 = [2, 5, 3, 9];
const result = arr2[0] * arr2[1] + arr2[2] * arr2[3];
console.log(result);

//Task #3
const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr3[1][0]);

//Task #4
const obj = { js: ["jQuery", "Angular"], php: "hello", css: "world" };
console.log(obj.js[0]);

//Task #5
const arr5 = [];
for (let i = 1; i <= 10; i++) {
  arr5.push("x".repeat(i));
}

console.log(arr5);

//Task #6
const arr6 = [];
for (let i = 1; i <= 10; i++) {
  let str = "";
  for (let j = 0; j < i; j++) {
    str += i;
  }
  arr6.push(str);
}

console.log(arr6);

//Task #7
const arrayFill = (value, count) => {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(value);
  }
  return arr;
};

const arr7 = arrayFill("x", 5);
console.log(arr7);

//Task #8
const arr8 = [4, 5, 2, 5, 1, 8];
let sum = 0;
let count = 0;

for (let i = 0; i < arr8.length; i++) {
  sum += arr8[i];
  count++;
  if (sum > 10) {
    break;
  }
}
console.log(count);// 3

//Task #9
const arr9 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const reversedArr = [];

for (let i = arr9.length - 1; i >= 0; i--) {
  reversedArr.push(arr9[i]);
}

console.log(reversedArr);

//Task #10
const arr10 = [[1, 2, 3], [4, 5], [6]];
let totalSum = 0;

for (let i = 0; i < arr10.length; i++) {
  for (let j = 0; j < arr10[i].length; j++) {
    totalSum += arr10[i][j];
  }
}

console.log(totalSum);

//Task #11
const arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let elementsSum = 0;

for (let i = 0; i < arr11.length; i++) {
  for (let j = 0; j < arr11[i].length; j++) {
    for (let n = 0; n < arr11[i][j].length; n++) {
      elementsSum += arr11[i][j][n];
    }
  }
}

console.log(elementsSum);