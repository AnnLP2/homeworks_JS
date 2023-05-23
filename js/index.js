"use strict";

(function() {
  const form = document.querySelector("#form");
  const inputs = form.querySelectorAll('input, select, textarea, input:not([type="checkbox"])');
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const data = {};
    inputs.forEach(({ name, value }) => {
      data[name] = value;
    });
    data.terms = form.querySelector('input[type="checkbox"]').checked;

    localStorage.setItem("formData", JSON.stringify(data));
  });
})();
