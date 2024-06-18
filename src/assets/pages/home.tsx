import React from "react";
import TodoForm from "../Components/TodoForm";
import Todo from "../Components/Todo";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

interface HomeProps {
  todos: TodoItem[];
  addTodo: (newTodo: TodoItem) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
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
    {todos.map((todoItem) => (
      <Todo
        key={todoItem.id}
        task={todoItem}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    ))}
  </div>
);

export default Home;
