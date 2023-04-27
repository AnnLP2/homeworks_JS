'use strict';

const ul = document.getElementById("ulId");
const lis = ul.getElementsByTagName("li");

for (const li of lis) {
    console.log(li);
}

const liCount = lis.length;
console.log(`Total number of elements ${liCount}`);

const liTexts = [];
for (const li of lis) {
    liTexts.push(li.textContent);
}

console.log(liTexts);