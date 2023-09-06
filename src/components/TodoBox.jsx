import React, { Component } from "react";
import Item from "./Item";

class TodoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      items: [],
    };
  }

  handleAddTodo = (e) => {
    e.preventDefault();
    const { task, items } = this.state;
    if (task.trim() === "") return;

    const newTodoItem = {
      id: this.getUniqueId(),
      text: task,
    };

    this.setState({
      items: [newTodoItem, ...items],
      task: "",
    });
  };

  handleRemoveTodo = (id) => {
    const { items } = this.state;
    const updatedTodoItems = items.filter((item) => item.id !== id);
    this.setState({ items: updatedTodoItems });
  };

  getUniqueId() {
    return new Date().getTime();
  }

  render() {
    const { task, items } = this.state;
    return (
      <div>
        <div className="mb-3">
          <form className="d-flex" onSubmit={this.handleAddTodo}>
            <div className="me-3">
              <input
                type="text"
                value={task}
                required=""
                className="form-control"
                placeholder="I am going..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
        <div>
          {items.map((item) => (
            <Item
              key={item.id}
              task={item.text}
              onRemove={() => this.handleRemoveTodo(item.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default TodoBox;
