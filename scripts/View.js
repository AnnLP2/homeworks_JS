"use strict";

const View = {
  todoContainer: null,

  renderItem(data) {
    const template = this.createTemplate(data);
    this.todoContainer.prepend(template);

  },

  createTemplate({ title, description, id }) {
    const template = document.createElement("div");
    template.className = "col-4";
    template.setAttribute("data-id", id);

    template.innerHTML = `
                          <div class="taskWrapper">
                              <div class="taskHeading">${title} <sup>${id}</sup></div>
                              <div class="taskDescription">${description}</div>
                              <button class="mt-3 remove-todo btn btn-danger btn-sm" data-remove-button>
                              <i class="bi bi-trash"></i>
                              <span>Remove</span>
                              </button>
                          </div>`;

    return template;
  },

  setContainer(domElement) {
    if (!(domElement instanceof HTMLElement)) throw new Error("Block not valid HTML element");
    this.todoContainer = domElement;
  },

  init(createTemplateFunc) {
    if(typeof createTemplateFunc !== 'function') return;
    this.createTemplate = createTemplateFunc;
  }
};