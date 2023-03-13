'use strict';

const userAge = prompt('Введите ваш возраст');

if (isNaN(+userAge) || +userAge < 0) {
    alert('Вы некорректно ввели ваш возраст!');
} else if (userAge === null) {
    alert( 'Вы ничего не ввели!');
} else if (+userAge % 10 === 1 && +userAge % 100 !== 11) {
    alert(`Вам ${userAge} год.`);
} else if (+userAge % 10 >= 2 && +userAge % 10 <= 4 && (+userAge % 100 < 10 || +userAge % 100 >= 20)) {
    alert(`Вам ${userAge} года.`);
} else {
    alert(`Вам ${userAge} лет.`);
}


// const userAge = prompt('Введите ваш возраст');
//
// if (userAge === null) {
//     alert('Вы ничего не ввели!');
// } else if (isNaN(+userAge) || +userAge < 0) {
//     alert ('Вы некорректно ввели ваш возраст!');
// } else if (+userAge % 10 === 1 && +userAge % 100 !== 11) {
//     alert(`Вам ${userAge} год`);
// } else if ((+userAge % 10 >= 5 && +userAge % 10 <= 9) || (+userAge % 100 >= 11 && +userAge % 100 <= 14) || +userAge % 10 === 0) {
//     alert(`Вам ${userAge} лет`);
// } else if (+userAge % 10 >= 2 && +userAge % 10 <= 4) {
//     alert(`Вам ${userAge} года`);
// } else {
//     alert('Что-то пошло не так!');
// }



