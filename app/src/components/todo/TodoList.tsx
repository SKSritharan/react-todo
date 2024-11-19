import { Todo } from "../../models/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  markAsCompleted: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList = ({ todos, markAsCompleted, deleteTodo }: TodoListProps) => {
  return (
    <div>
      <ul className="mt-4 divide-y divide-gray-300">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
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
