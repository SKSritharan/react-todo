interface TodoItemProps {
  markAsCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
}

const TodoItem = ({ markAsCompleted, deleteTodo, todo }: TodoItemProps) => {
  return (
    <li className="flex items-center">
      <label onClick={() => markAsCompleted(todo.id)}>
        <input type="checkbox" checked={todo.completed} />
        <span className="ml-2">{todo.text}</span>
      </label>
      <div className="ml-auto">
        <button
          className="ml-2 text-red-500"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
