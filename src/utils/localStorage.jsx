export const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
export const loadTodos = () => {
  const storedTodos = localStorage.getItem("todos");
  return JSON.parse(storedTodos) || [];
};
