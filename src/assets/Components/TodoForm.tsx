import React, { useState } from "react";

interface AddTodoFormProps {
  addTodo: (newTodo: TodoItem) => void;
}

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const TodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [taskText, setTaskText] = useState<string>("");

  function handleTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value);
  }

  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (taskText.trim())
      addTodo({
        id: Date.now(),
        text: taskText,
        completed: false,
      });
    setTaskText("");
  }

  return (
    <>
      <div>
        <form className="box">
          <input
            value={taskText}
            onChange={handleTaskChange}
            placeholder="what is next? "
          ></input>
          <button type="submit" onClick={handleButtonClick}>
            add
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
