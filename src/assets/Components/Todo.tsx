import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";

interface TodoProps {
  task: TodoItem;
  toggleTodo: (id: number) => void;
}

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const Todo: React.FC<TodoProps> = ({ task, toggleTodo }) => {
  const handleToggle = () => {
    toggleTodo(task.id);
  };

  return (
    <div className="list">
      <div className="checkbox" onClick={handleToggle}>
        <FontAwesomeIcon
          icon={task.completed ? faSquareCheck : faCircleCheck}
          className={task.completed ? "checked-icon" : "unchecked-icon"}
        />
      </div>
      <label className={task.completed ? "completed" : ""}>{task.text}</label>
    </div>
  );
};

export default Todo;
