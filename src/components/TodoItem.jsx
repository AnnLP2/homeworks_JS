import React from "react";
import PropTypes from "prop-types";

function TodoItem({ todo, onRemove }) {
  const handleRemove = () => {
    onRemove(todo.id);
  };
  return (
    <div className="col-4">
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
