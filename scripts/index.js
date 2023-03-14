'use strict';

const userBirthYear = prompt('Введи свой год рождения', '1990');

if (userBirthYear !== null && userBirthYear !== '' && !isNaN(+userBirthYear)) {
    const userCity = prompt('В каком городе ты живешь?');

    if (userCity !== null) {
        const userFavouriteSport = prompt('Какой твой любимый вид спорта?');
            const userAge = (2023 - Number(userBirthYear));
            let message = `Тебе ${userAge}.\n`;

            if (userFavouriteSport !== null) {
                if (userFavouriteSport === 'футбол') {
                    message +='Круто! Хочешь стать, как Лионель Месси!\n';
                } else if (userFavouriteSport === 'баскетбол') {
                    message +='Круто! Хочешь стать, как Леброн Джеймс!\n';
                } else if (userFavouriteSport === 'бокс') {
                    message +='Круто! Хочешь стать, как Владимир Кличко!\n';
                } else if (userFavouriteSport === '') {
                    message +='Ничего! Ты еще определишься со спортом!\n';
                } else {
                    message +='Классно! Ты обязательно станешь чемпионом в этом спорте!\n';
                }

                if (userCity === '') {
                    message += 'Понимаю) Ты гражданин мира!\n';
                } else if (userCity === 'Киев') {
                    message +='Ты живешь в столице Украины.\n';
                } else if (userCity === 'Москва') {
                    message +='Ты живешь в столице России.\n';
                } else if (userCity === 'Минск') {
                    message +='Ты живешь в столице Беларуси.\n';
                } else {
                    message +=`Ты живешь в городе ${userCity}.\n`;
                }

        alert(message);
        } else {
            alert('Жаль, что ты не захотел ввести свой любимый вид спорта =(')
        }
    } else {
        alert('Жаль, что ты не захотел ввести свой город проживания =(');
    }
} else {
    alert('Жаль, что ты не захотел ввести свой год рождения =(');
}
