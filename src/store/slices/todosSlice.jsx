import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: { list: [] },
  reducers: {
    addTodo: (state, action) => {
      state.list.unshift(action.payload);
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    removeAllTodos: (state) => {
      state.list = [];
    },
  },
});

export const { addTodo, removeTodo, removeAllTodos } = todosSlice.actions;

export default todosSlice.reducer;
