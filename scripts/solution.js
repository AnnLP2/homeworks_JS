"use strict";

(function() {
  const form = document.querySelector("#todoForm");
  const todosContainer = document.querySelector("#todoItems");
  const titleInput = form.querySelector("input[name=title]");
  const descriptionTextarea = form.querySelector("textarea[name=description]");
  const ATTR_KEY = "data-id";

  const todos = getTodos();
  todos.forEach(addTodo);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const title = titleInput.value;
    const description = descriptionTextarea.value;
    const newTodo = { title, description, id: getUniqueId() };
    addTodo(newTodo);
    todos.push(newTodo);
    event.target.reset();
    saveTodos();
  });

  todosContainer.addEventListener("click", (event) => {
    const removeButton = event.target.closest(".remove-todo");
    if (!removeButton) return;

    const todoId = Number(
      removeButton.closest(".taskWrapper").parentElement.getAttribute(ATTR_KEY)
    );
    removeTodo(todoId);
    saveTodos();
  });

  function addTodo(newTodo) {
    const todoElement = createTodoElement(newTodo);
    todosContainer.prepend(todoElement);
  }

  function removeTodo(todoId) {
    const todoElement = todosContainer.querySelector(
      `[${ATTR_KEY}="${todoId}"]`
    );
    todoElement.remove();
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    todos.splice(todoIndex, 1);
  }

  function getTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
  }

  function createTodoElement({ title, description, id }) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("col-4");
    wrapper.setAttribute(ATTR_KEY, id);
    wrapper.innerHTML = `<div class="taskWrapper">
                              <div class="taskHeading">${title}</div>
                              <div class="taskDescription">${description}</div>
                              <button class="mt-3 remove-todo btn btn-danger btn-sm">
                                <i class="bi bi-trash"></i>
                                <span>Remove</span>
                              </button>
                          </div>`;
    return wrapper;
  }

  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function getUniqueId() {
    return new Date().getTime();
  }
})();
