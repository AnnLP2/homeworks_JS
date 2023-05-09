'use strict';

const ulElement = document.getElementById('ulId');

const ulAttributes = ulElement.attributes;

const arrOfAttributesValues = [];
for (const attribute of ulAttributes) {
    arrOfAttributesValues.push(attribute.value);
}
console.log(arrOfAttributesValues);

const arrOfAttributesNames = Array.from(ulAttributes).map(attribute => attribute.name);
console.log(arrOfAttributesNames);

const lastLiElement = ulElement.lastElementChild;
const myName = 'Anna';
lastLiElement.innerHTML = 'Привет! Меня зовут ' + myName + '.';

const firstLiElement = ulElement.firstElementChild;
const attributeName = 'data-my-name';
firstLiElement.setAttribute(attributeName, myName);

const attributeToRemove = 'data-dog-tail';
ulElement.removeAttribute(attributeToRemove);