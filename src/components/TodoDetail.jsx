import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function TodoDetail() {
  const { id } = useParams();
  const todo = useSelector((state) =>
    state.todos.list.find((item) => item.id === Number(id)),
  );

  if (!todo) {
    return <div>Задача не найдена!</div>;
  }

  return (
    <div className="col-8">
      <div className="taskWrapper">
        <div className="taskHeading">{todo.title}</div>
        <div className="taskDescription">{todo.description}</div>
        <hr />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="completed form-check">
          <input type="checkbox" className="form-check-input" />
          <span>Завершено ?</span>
        </label>
        <hr />
      </div>
    </div>
  );
}

export default TodoDetail;
