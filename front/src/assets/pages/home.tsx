// @ts-nocheck
import React from "react";
import TodoForm from "../Components/TodoForm";
import Todo from "../Components/Todo";

interface TodoItem {
  _id: string;
  title: string;
  complete: boolean;
}

interface HomeProps {
  todos: TodoItem[];
  addTodo: (newTodo: TodoItem) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({
  todos,
  addTodo,
  toggleTodo,
  deleteTodo,
}) => (
  <div>
    <h1 className="oswald title">Your Task</h1>
    <TodoForm addTodo={addTodo} />
    {todos.map((todoItem, index) => (
      <Todo
        key={index}
        task={todoItem}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    ))}
  </div>
);

export default Home;
