"use strict";

(function() {
  const form = document.querySelector("#form");
  const dataKey = "formData";
  const inputs = form.querySelectorAll("input, select, textarea");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const data = {};
    inputs.forEach(({ name, value }) => {
      data[name] = value;
    });

    localStorage.setItem(dataKey, JSON.stringify(data));
  });

  const loadedHandler = () => {
    if (localStorage.getItem(dataKey)) {
      const data = JSON.parse(localStorage.getItem(dataKey));
      // window.location.href = "result.html";

      const dataList = document.querySelector("#data-list");

      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          const listItem = document.createElement("li");
          listItem.innerHTML = key + ": " + data[key];
          dataList.appendChild(listItem);
        }
      }
    } else {
      console.log("There is no data!");
    }
  };

  document.addEventListener("DOMContentLoaded", loadedHandler);
})();
