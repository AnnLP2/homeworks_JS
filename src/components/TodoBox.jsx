import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";
import Form from "./Form";

function TodoBox() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);
  const getUniqueId = () => uuidv4();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    const newTodoItem = {
      id: getUniqueId(),
      text: task,
    };

    setItems([newTodoItem, ...items]);
    setTask("");
  };

  const handleRemoveTodo = (id) => {
    const updatedTodoItems = items.filter((item) => item.id !== id);
    setItems(updatedTodoItems);
  };

  const handleChange = ({ target }) => {
    setTask(target.value);
  };

  return (
    <div>
      <div className="mb-3">
        <Form value={task} onSubmit={handleAddTodo} onChange={handleChange} />
      </div>
      <div>
        {items.map((item) => (
          <Item
            key={item.id}
            task={item.text}
            onRemove={() => handleRemoveTodo(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoBox;
