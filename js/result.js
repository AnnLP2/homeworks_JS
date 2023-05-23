"use strict";

(function() {
  const loadedHandler = () => {
    const rawData = localStorage.getItem("formData");
    if (!rawData) {
      const messageItem = document.createElement('h1');
      messageItem.innerHTML = 'No data!';
      document.body.append(messageItem);
      return;
    }
      const data = JSON.parse(rawData);
      const dataList = document.querySelector("#dataList");

      for (let key in data) {
        if (data[key]) {
          const listItem = document.createElement("li");
          listItem.innerHTML = `${key}:${data[key]}`;
          dataList.append(listItem);
        }
      }
  };

  document.addEventListener("DOMContentLoaded", loadedHandler);
}) ();