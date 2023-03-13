
_Задание #1_

Скомбинировать инструкции if, которые проверяют данные введенные пользователем в 1 инструкцию (объединить проверки с помощью логических операторов), 
получается что вместо 3 if..else..if у вас должен быть только один if с объединенным условием и инструкция else, 
которая срабатывает при успешном введении данных.


_Задание #2_

Переписать код ниже с использованием конструкции switch…case

`let numOrStr = prompt('input number or string');
console.log(numOrStr);
if(numOrStr === null) {
console.log('вы отменили')
} else if( numOrStr.trim() === '' ) {
console.log('Empty String');
} else if( isNaN( +numOrStr ) ) {
console.log(' number is Ba_NaN')
} else {
console.log('OK!');
}`

