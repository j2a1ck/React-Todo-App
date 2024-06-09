import TodoForm from "./assets/Components/TodoForm";
import { useState } from "react";
import Todo from "./assets/Components/Todo";
import Header from "./assets/Components/Header";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todo, setTodo] = useState<TodoItem[]>([]);

  const addTodo = (newTodo: TodoItem) => {
    setTodo([...todo, newTodo]);
  };

  return (
    <div>
      <Header />
      <p className="oswald title">Your Task</p>
      <TodoForm addTodo={addTodo} />
      {todo.map((todoItem, index) => (
        <Todo task={todoItem} key={index} />
      ))}
    </div>
  );
}

export default App;
