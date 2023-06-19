"use strict";

(function() {
  function customCreateTemplate({ title, description, id }) {
    const template = document.createElement("div");
    template.className = "col-6";
    template.setAttribute("data-id", id);

    template.innerHTML = `
                          <div class="task">
                              <div class="task__heading">${title} <sub><b>${id}</b></sub></div>
                              <div class="task__description">${description}</div>
                              <hr>
                              <i>By Ann</i>
                              <hr>
                              <button class="mt-3 remove-todo btn btn-danger btn-sm" data-remove-button>
                              <i class="bi bi-trash"></i>
                              <span>Remove</span>
                              </button>
                          </div>`;

    return template;
  }

  View.init(customCreateTemplate);
  Model.init(localStorage, "todo-list-data");
  Controller.init("#todoForm", "#todoItems");
})();