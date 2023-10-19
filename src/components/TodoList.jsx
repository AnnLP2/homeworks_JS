import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { removeTodo } from "../store/slices/todosSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="col-8">
      <div className="row" id="todoItems">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={() => handleRemove(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
