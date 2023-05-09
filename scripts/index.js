'use strict';

const generateList = (array) => {
    const ul = document.createElement('ul');
    for (let i = 0; i < array.length; i++) {
        const item = document.createElement('li');
        if (Array.isArray(array[i])) {
            item.appendChild(generateList(array[i]));
        } else {
            item.textContent = array[i];
        }
        ul.appendChild(item);
    }
    return ul;
}

const arr1 = [1, 2, [1.1, 1.2, 1.3], 3];
const list1 = generateList(arr1);
document.body.insertBefore(list1, document.body.firstChild);
