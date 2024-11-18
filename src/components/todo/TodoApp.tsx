import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import AppBanner from "../AppBanner";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Learn Tailwind CSS", completed: false },
    { id: 3, text: "Build an app", completed: false },
  ]);

  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text,
        completed: false,
      },
    ]);
  };

  const markAsCompleted = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full max-w-md">
      <AppBanner />
      <div className="bg-gray-200 rounded-lg shadow-lg p-4 mt-4">
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          markAsCompleted={markAsCompleted}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;
