'use strict';

const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const select = form.elements.option;
    const termsCheckbox = form.querySelector('input[name="terms"]');
    console.log({
        email: formData.get('email'),
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        nickname: formData.get('nickname'),
        password: formData.get('password'),
        file: formData.get('file'),
        select: `Option ${select.value}`,
        message: formData.get('message'),
        isTermsChecked: termsCheckbox.checked,
    });
});
