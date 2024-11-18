import { useState } from "react";

interface TodoFormProps {
  addTodo: (newTodo: string) => void;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [text, onChangeText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(text);

        onChangeText("");
      }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Add a new todo"
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => onChangeText(e.target.value)}
          value={text}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 mt-2 rounded-md"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
