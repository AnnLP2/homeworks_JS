'use strict';

(function () {
    const form = document.querySelector('#form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const data = {};
        form.querySelectorAll('input:not([type="checkbox"]), textarea, select').forEach(input => {
            data[input.name] = input.value;
        });
        data.terms = form.querySelector('input[type="checkbox"]').checked;
        console.log(data);
    });
})();

