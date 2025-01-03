import React, { useState } from "react";

interface AddTodoFormProps {
  addTodo: (newTodo: TodoItem) => void;
}

interface TodoItem {
  id: number;
  title: string;
  complete: boolean;
}

const TodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [taskText, setTaskText] = useState<string>("");

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskText.trim())
      addTodo({
        id: Date.now(),
        title: taskText,
        complete: false,
      });
    setTaskText("");
  }

  return (
    <div>
      <form className="box" onSubmit={handleFormSubmit}>
        <input
          id="IDK"
          value={taskText}
          onChange={(event) => setTaskText(event.target.value)}
          placeholder="what is next? "
        ></input>
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default TodoForm;
