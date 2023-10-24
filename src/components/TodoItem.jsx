import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "../styles/TodoItem.module.css";

function TodoItem({ todo, onRemove }) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const completedStatus = localStorage.getItem(`completed_${todo.id}`);
    if (completedStatus) {
      setCompleted(completedStatus === "true");
    }
  }, [todo.id]);

  const handleRemove = () => {
    onRemove(todo.id);
  };

  const handleCheckboxChange = () => {
    const newCompleted = !completed;
    setCompleted(newCompleted);
    localStorage.setItem(`completed_${todo.id}`, newCompleted.toString());
  };

  return (
    <div className="col-4">
      <div className={`${styles.taskWrapper}`}>
        <Link to={`/todo/${todo.id}`} className={`${styles.taskHeading}`}>
          {todo.title}
        </Link>
        <div className={`${styles.taskDescription}`}>{todo.description}</div>
        <hr />
        <label className={classNames("completed", "form-check")}>
          <input
            type="checkbox"
            className={classNames("form-check-input")}
            checked={completed}
            onChange={handleCheckboxChange}
          />
          <span>Завершено ?</span>
        </label>
        <hr />
        <button
          className={classNames("btn", "btn-danger", "delete-btn")}
          type="button"
          onClick={handleRemove}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TodoItem;
