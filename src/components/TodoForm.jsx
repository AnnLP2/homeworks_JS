import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form, Field } from "formik";
import classNames from "classnames";
import { addTodo, removeAllTodos } from "../store/slices/todosSlice";

function TodoForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const uniqueId = uuidv4();
    const newTodo = {
      id: uniqueId,
      title: values.title,
      description: values.description,
    };
    dispatch(addTodo(newTodo));
    resetForm();
  };

  const handleRemoveAll = () => {
    dispatch(removeAllTodos());
  };

  return (
    <div className="col-4">
      <Formik
        initialValues={{ title: "", description: "" }}
        onSubmit={handleSubmit}
      >
        <Form id="todoForm">
          <div className="mb-3">
            <label className="form-label" htmlFor="title">
              Task title
            </label>
            <Field
              type="text"
              name="title"
              className={classNames("form-control")}
              placeholder="Title"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="description">
              Task body
            </label>
            <Field
              as="textarea"
              name="description"
              className={classNames("form-control")}
              placeholder="Task body"
              cols="30"
              rows="10"
              required
            />
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <input
                type="submit"
                className={classNames("btn", "btn-primary")}
                value="Create Task!"
                style={{ marginRight: "5px" }}
              />
              <input
                type="reset"
                value="Очистить"
                className={classNames("btn", "btn-warning")}
              />
            </div>
            <button
              type="button"
              className={classNames("btn", "btn-danger", "remove-all")}
              onClick={handleRemoveAll}
            >
              Удалить все
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default TodoForm;
