import TaskBudget from "./assets/TaskBudget"
import { useState } from "react"

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
      </div>
      
    </>
  )
}

export default App
