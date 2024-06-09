import React from "react";

interface TodoProps {
  task: {
    text: string;
  };
}

const Todo: React.FC<TodoProps> = ({ task }) => {
  return (
    <form className="list">
      {/* <div className="checkbox uncheck">
      <i className="fa-regular fa-circle"></i></div> */}
      <div className="checkbox checked">
      <i className="fa-solid fa-circle"></i>
      </div>
      {/* <input type="checkbox"></input> */}
      <label>{task.text}</label>
    </form>
  );
};

export default Todo;
