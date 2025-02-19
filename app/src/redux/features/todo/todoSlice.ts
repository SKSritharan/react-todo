import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../../models/Todo";

const todoSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: state.length + 1,
        text: action.payload,
        completed: false,
      });
    },

    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
