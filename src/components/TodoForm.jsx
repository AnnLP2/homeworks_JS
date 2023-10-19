import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo, removeAllTodos } from "../store/slices/todosSlice";

function TodoForm() {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueId = uuidv4();
    const newTodo = {
      id: uniqueId,
      title: formData.title,
      description: formData.description,
    };
    dispatch(addTodo(newTodo));
    setFormData({ title: "", description: "" });
  };
  const handleReset = () => {
    setFormData({ title: "", description: "" });
  };

  const handleRemoveAll = () => {
    dispatch(removeAllTodos());
  };

  return (
    <div className="col-4">
      <form id="todoForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="form-label">Task title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Title"
            required
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="form-label">Task body</label>
          <textarea
            name="description"
            className="form-control"
            placeholder="Task body"
            cols="30"
            rows="10"
            required
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <input
              type="submit"
              className="btn btn-primary"
              value="Create Task!"
            />
            <input
              type="reset"
              value="Очистить"
              className="btn btn-warning"
              onClick={handleReset}
            />
          </div>
          <button
            type="button"
            className="btn btn-danger remove-all"
            onClick={handleRemoveAll}
          >
            Удалить все
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
