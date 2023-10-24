import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../styles/TodoItem.module.css";

function TodoDetail() {
  const { id } = useParams();
  const todo = useSelector((state) =>
    state.todos.list.find((item) => item.id === id),
  );

  if (!todo) {
    return <div>Задача не найдена!</div>;
  }

  return (
    <div className="col-4">
      <div className={`${styles.taskWrapper}`}>
        <div className={`${styles.taskHeading}`}>{todo.title}</div>
        <div className={`${styles.taskDescription}`}>{todo.description}</div>
        <hr />
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
