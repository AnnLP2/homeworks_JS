'use strict';

(function () {
    const form = document.querySelector('#form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const data = {};
        form.querySelectorAll('input, textarea, select').forEach(input => {
            data[input.name] = input.value;
        });
        console.log(data);
    });
})();

