import { create } from "zustand";
import { Todo } from "../models/Todo";

interface TodoState {
  todos: Todo[];
  addTodo: (todo: Todo) => Promise<void>;
  toggleTodo: (id: string) => Promise<void>;
  removeTodo: (id: string) => Promise<void>;
  fetchTodos: () => Promise<void>;
}

export const useTodoStore = create<TodoState>((set, get) => ({
  todos: [],
  fetchTodos: async () => {
    const response = await fetch("http://localhost:3000/api/todos");
    const todos = await response.json();
    set({ todos });
  },
  addTodo: async (todo) => {
    const response = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: todo,
      }),
    });
    const newTodo = await response.json();
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },
  toggleTodo: async (id) => {
    const todo = get().todos.find((todo: Todo) => todo._id === id);
    if (todo) {
      const updatedTodo = { text: todo.text, completed: !todo.completed };
      await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      });
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo._id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      }));
    }
  },
  removeTodo: async (id) => {
    await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "DELETE",
    });
    set((state) => ({
      todos: state.todos.filter((todo) => todo._id !== id),
    }));
  },
}));
