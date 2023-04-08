"use strict";

const arr = [3, 2, 6, 8, 11, 6];
const indexOf = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) return i;
  }
  return -1;
};

console.log(indexOf(arr, 6)); //2
console.log(indexOf(arr, 0)); //-1

const includes = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) return true;
  }
  return false;
};

console.log(includes(arr, 11)); // true
console.log(includes(arr, 0)); // false

const lastIndexOf = (array, item) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (item === array[i]) return i;
  }
  return -1;
};

console.log(lastIndexOf(arr, 6)); // 5
console.log(lastIndexOf(arr, 0)); // -1

const find = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) return array[i];
  }
};
const findNextItemAfter2 = (item, index, arr) => {
  const previousItem = arr[index - 1];
  return previousItem === 2;
};

console.log(find(arr, findNextItemAfter2)); // 6

const findIndex = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) return i;
  }
  return -1;
};

console.log(findIndex(arr, (item) => item === 8)); // 3

const some = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) return true;
  }
  return false;
};
console.log(some(arr, (item) => item % 2 === 0)); // true

const every = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) return false;
  }
  return true;
};
console.log(every(arr, (item) => item % 2 === 0)); // false