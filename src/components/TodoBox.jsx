import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";
import Form from "./Form";

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
    return uuidv4();
  }

  handleChange = ({ target }) => {
    this.setState({ task: target.value });
  };

  render() {
    const { task, items } = this.state;
    return (
      <div>
        <div className="mb-3">
          <Form
            value={task}
            onSubmit={this.handleAddTodo}
            onChange={this.handleChange}
          />
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
