import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoDetail from "./components/TodoDetail";

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">TODO LIST</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div className="row">
                <TodoForm />
                <TodoList />
              </div>
            }
          />
          <Route path="/todo/:id" element={<TodoDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
