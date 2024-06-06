import React from "react";

interface TodoProps {
  task: {
    text: string;
  };
}

const Todo: React.FC<TodoProps> = ({ task }) => {
  return (
    <form className="list">
      <input type="checkbox"></input>
      <label>{task.text}</label>
    </form>
  );
};

export default Todo;
