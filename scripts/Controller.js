"use strict";

const Controller = {
  form: null,
  todoContainer: null,

  initListeners() {
    this.form.addEventListener("submit", this.formHandler.bind(this));
    window.addEventListener("DOMContentLoaded", this.prerenderTodos.bind(this));
    document
      .querySelector("#todoItems")
      .addEventListener("click", this.removeTodoHandler.bind(this));

  },

  removeTodoHandler(event) {
    const isTargetButton = event.target.dataset["remove-button"];
    const isTargetInsideButton = !!event.target.closest("button[data-remove-button]");
    if (!isTargetButton && !isTargetInsideButton) return;
    const todoElement = event.target.closest("[data-id]");
    const id = Number(todoElement.getAttribute("data-id"));
    Model.removeData(id);
    View.removeItem(id);
  },

  formHandler(event) {
    event.preventDefault();
    event.stopPropagation();

    const data = {};
    this.form.querySelectorAll("input, textarea, select").forEach(({ name, value }) => {
      data[name] = value;
    });
    const savedTodoItem = Model.postData(data);
    View.renderItem(savedTodoItem);
    View.resetForm();
  },

  prerenderTodos() {
    const savedData = Model.getData();
    const iterator = savedData[Symbol.iterator]();
    console.log(iterator);


    const intervalID = setInterval(() => {
      const todoItem = iterator.next();
      if (todoItem.done) {
        clearInterval(intervalID);
      } else {
        View.renderItem(todoItem.value);
      }
    }, 500);
  },

  init(formSelector, blockSelector) {
    if (typeof formSelector !== "string") throw new Error("Form selector should be a string!");
    const form = document.querySelector(formSelector);
    if (!(form instanceof HTMLElement)) throw new Error("Form not valid HTML element!");

    if (typeof blockSelector !== "string") throw new Error("Block selector should be a string!");
    const block = document.querySelector(blockSelector);
    if (!(block instanceof HTMLElement)) throw new Error("Block not valid HTML element!");

    this.form = form;
    this.todoContainer = block;
    View.setContainer(block);

    this.initListeners();

  }
};
