import React, { useState } from "react";
import TodoForm from "./assets/Components/TodoForm";
import Todo from "./assets/Components/Todo";
import Navbar from "./assets/Components/Navbar";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (newTodo: TodoItem) => {
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <Navbar />
      <h1 className="oswald title">Your Task</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todoItem) => (
        <Todo key={todoItem.id} task={todoItem} toggleTodo={toggleTodo} />
      ))}
    </div>  
  );
};

export default App;
