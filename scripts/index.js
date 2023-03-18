'use strict';

const x = 4;
const y = 9;
const R = 10;
const z = Math.sqrt((x ** 2) + (y ** 2));

const result = (z <= R) ? 'Точка в окружности' : 'Точка вне окружности';
console.log(result);

