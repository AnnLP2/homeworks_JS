'use strict';

(function () {
    const form = document.querySelector('#form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const data = {};
        const terms = form.querySelector('input.form-check-input');
        form.querySelectorAll('input, textarea, select').forEach(input => {
            if(!terms.checked) throw new Error("You need to agree to the terms");
            data[input.name] = input.value;
        });
        console.log(data);
    });
})();

