import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/TodoItem.module.css";

function TodoItem({ todo, onRemove }) {
  const handleRemove = () => {
    onRemove(todo.id);
  };
  return (
    <div className="col-4">
      <div className={`${styles.taskWrapper}`}>
        <Link to={`/todo/${todo.id}`} className={`${styles.taskHeading}`}>
          {todo.title}
        </Link>
        <div className={`${styles.taskDescription}`}>{todo.description}</div>
        <hr />
        <label className="completed form-check">
          <input type="checkbox" className="form-check-input" />
          <span>Завершено ?</span>
        </label>
        <hr />
        <button
          className="btn btn-danger delete-btn"
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
