"use strict";

//Task #1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];
console.log(newArr);

//Task #2
let arr = [1, 2, 3];
arr.reverse();
console.log(arr);

//Task #3
let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

//Task #4
let arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);

//Task #5
const arr = ["js", "css", "jq"];
console.log(arr[0]);

//Task #6
const arr = ["js", "css", "jq"];
console.log(arr[arr.length - 1]);

//Task #7
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(0, 3);
console.log(newArr);

//Task #8
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(-2);
console.log(newArr);

//Task #9
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

//Task #10
const arr = [1, 2, 3, 4, 5];
const newArr = arr.splice(1, 3);
console.log(newArr);

//Task #11
let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, "a", "b", "c");
console.log(arr);

//Task #12
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, "a", "b");
arr.splice(6, 0, "c");
arr.push("e");
console.log(arr);

//Task #13
let arr = [3, 4, 1, 2, 7];
arr.sort();
console.log(arr);


// Task #14
const arr = [5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);

// const arr = [5, 6, 7, 8, 9];
// const sum = arr.reduce((acc,curr) => acc + curr, 0);
//
// console.log(sum);

// Task #15
let arr = [5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] ** 2;
}

console.log(arr);

// const arr = [5, 6, 7, 8, 9];
// const squares = arr.map(num => num ** 2);
//
// console.log(squares);

// Task #16
let arr = [1, -3, 5, 6, -7, 8, 9, -11];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    arr.splice(i, 1);
  }
}

console.log(arr);

// const arr = [1, -3, 5, 6, -7, 8, 9, -11];
// const negativeNumbers = arr.filter(num => num < 0);
//
// console.log(negativeNumbers);

// Task #17
let arr = [1, -3, 5, 6, -7, 8, 9, -11];
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] % 2 !== 0) {
    arr.splice(i, 1);
  }
}

console.log(arr);

// const arr = [1, -3, 5, 6, -7, 8, 9, -11];
// const evenNumbers = arr.filter(num => num % 2 === 0);
//
// console.log(evenNumbers);

//Task #18
let arr = ["aaa", "aaaqqq", "zzzqq", "zz", "qsaa", "q", "az"];
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i].length <= 5) {
    arr.splice(i, 1);
  }
}

console.log(arr);

// const arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// const newArr = arr.filter(item => item.length > 5);
//
// console.log(newArr);

//Task #19
let arr = [1, 2, [3, 4], 5, [6, 7]];
for (let i = arr.length - 1; i >= 0; i--) {
  if (!Array.isArray(arr[i])) {
    arr.splice(i, 1);
  }
}

console.log(arr);

// const arr = [1, 2, [3, 4], 5, [6, 7]];
// const subArrays = arr.filter(item => Array.isArray(item));
// console.log(subArrays);

//Task #20
const arr = [5, -3, 6, -5, 0, -7, 8, 9];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    count++;
  }
}

console.log(count);

// const arr = [5, -3, 6, -5, 0, -7, 8, 9];
// const count = arr.filter(num => num < 0).length;
//
// console.log(count);