import { createSlice } from "@reduxjs/toolkit";
import { loadTodos, saveTodos } from "../../utils/localStorage";

const todosSlice = createSlice({
  name: "todos",
  initialState: { list: loadTodos() },
  reducers: {
    addTodo: (state, action) => {
      state.list.unshift(action.payload);
      saveTodos(state.list);
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
      saveTodos(state.list);
    },
    removeAllTodos: (state) => {
      state.list = [];
      saveTodos(state.list);
    },
  },
});

export const { addTodo, removeTodo, removeAllTodos } = todosSlice.actions;

export default todosSlice.reducer;
