import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faCircleCheck,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";

interface TodoProps {
  task: TodoItem;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const Todo: React.FC<TodoProps> = ({ task, toggleTodo, deleteTodo }) => {
  return (
    <div className="list">
      <div className="checkbox" onClick={() => toggleTodo(task.id)}>
        <FontAwesomeIcon
          icon={task.completed ? faSquareCheck : faCircleCheck}
          className={task.completed ? "checked-icon" : "unchecked-icon"}
        />
      </div>
      <label className={task.completed ? "completed" : ""}>{task.text}</label>
      <div className="trashIcon" onClick={() => deleteTodo(task.id)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </div>
  );
};

export default Todo;
