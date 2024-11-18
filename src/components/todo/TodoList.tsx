import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
  markAsCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList = ({ todos, markAsCompleted, deleteTodo }: TodoListProps) => {
  return (
    <div>
      <ul className="mt-4 divide-y divide-gray-300">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            markAsCompleted={markAsCompleted}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
