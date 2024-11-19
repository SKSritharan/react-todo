import { Todo } from "../../models/Todo";

interface TodoItemProps {
  markAsCompleted: (id: string) => void;
  deleteTodo: (id: string) => void;
  todo: Todo;
}

const TodoItem = ({ markAsCompleted, deleteTodo, todo }: TodoItemProps) => {
  return (
    <li className="flex items-center">
      <label onClick={() => markAsCompleted(todo._id)}>
        <input type="checkbox" checked={todo.completed} />
        <span className="ml-2">{todo.text}</span>
      </label>
      <div className="ml-auto">
        <button
          className="ml-2 text-red-500"
          onClick={() => deleteTodo(todo._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
