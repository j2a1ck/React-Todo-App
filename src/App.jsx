import TaskBudget from "./assets/TaskBudget"
import { useState } from "react"
import Todo from "./assets/Todo"

function App() {
  const [todo, setTodo] = useState([])

  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo])
  }


  return (
    <>
      <div>
        <p className="oswald title">Your Task</p>
        <TaskBudget addTodo={addTodo}/>
        {todo.map((todo, index) => (
          <Todo task={todo} key={index} />
        ))}
      </div>
      
    </>
  )
}

export default App
