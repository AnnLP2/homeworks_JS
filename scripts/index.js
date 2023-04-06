"use strict";

const arr = [3, 2, 6, 8, 11, 6];
const indexOf = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) return i;
  }
  return -1;
};

console.log(indexOf(arr,6)); //2
console.log(indexOf(arr,0)); //-1

const includes = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) return true;
  }
  return false;
};

console.log(includes(arr,11)); // true
console.log(includes(arr,0)); // false

const lastIndexOf = (array, item) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (item === array[i]) return i;
  }
  return -1;
};

console.log(lastIndexOf(arr,6)); // 5
console.log(lastIndexOf(arr,0)); // -1