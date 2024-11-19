import { useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import AppBanner from "../AppBanner";
import { useTodoStore } from "../../zustand/store";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addTodo,
//   removeTodo,
//   toggleTodo,
// } from "../../redux/features/todo/todoSlice";
// import { Todo } from "../../models/Todo";

const TodoApp = () => {
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const fetchTodos = useTodoStore((state) => state.fetchTodos);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddTodo = async (todo: any) => {
    await addTodo(todo);
  };

  const handleToggleTodo = async (id: string) => {
    await toggleTodo(id);
  };

  const handleDeleteTodo = async (id: string) => {
    await removeTodo(id);
  };

  // const todos = useSelector((state: { todos: Todo[] }) => state.todos);
  // const dispatch = useDispatch();

  // const handleAddTodo = (todo: any) => {
  //   dispatch(addTodo(todo));
  // };

  // const handleToggleTodo = (id: number) => {
  //   dispatch(toggleTodo(id));
  // };

  // const handleDeleteTodo = (id: number) => {
  //   dispatch(removeTodo(id));
  // };

  return (
    <div className="w-full max-w-md">
      <AppBanner />
      <div className="bg-gray-200 rounded-lg shadow-lg p-4 mt-4">
        <TodoForm addTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          markAsCompleted={handleToggleTodo}
          deleteTodo={handleDeleteTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;
