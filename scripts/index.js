"use strict";

//Task #1
const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
const sum = arr.reduce((acc, currentItem) => {
  if (currentItem > 0) {
    return acc += currentItem;
  }
  return acc;
}, 0);
const positiveCount = arr.reduce((acc, currentItem) => {
  if (currentItem > 0) {
    return acc += 1;
  }
  return acc;
}, 0);

console.log(`Количество положительных элементов: ${positiveCount}`);
console.log(`Сумма положительных элементов: ${sum}`);

//Task #2
const minElementIndex = arr.reduce((minIndex, currentItem, currentIndex) => {
  if (currentItem < arr[minIndex]) {
    return currentIndex;
  }
  return minIndex;
}, 0);

console.log(`Минимальный элемент: ${arr[minElementIndex]}`);
console.log(`Порядковый номер минимального элемента: ${minElementIndex}`);

//Task #3
