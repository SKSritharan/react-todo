import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import AppBanner from "../AppBanner";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../../features/todo/todoSlice";
import { Todo } from "../../models/Todo";

const TodoApp = () => {
  const todos = useSelector((state: { todos: Todo[] }) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (todo: any) => {
    dispatch(addTodo(todo));
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

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
