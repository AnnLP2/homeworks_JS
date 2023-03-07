'use strict';

//Task #1
const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//Task #2
const user = {
    name: "John",
}; // это будет работать?

user.name = "Pete";
alert(user.name); //"Pete"

//Task #3
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
// let sum = salaries.John + salaries.Ann + salaries.Pete;
// alert(sum);
let sum = null;
for (let key in salaries) {
    sum +=salaries[key];
}
alert(sum);