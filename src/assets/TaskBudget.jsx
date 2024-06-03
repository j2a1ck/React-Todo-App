/* eslint-disable react/prop-types */
import { useState } from "react"

export default function TaskBudget({ addTodo }){
    const [taskText, setTaskText] = useState("");

    function handleTaskChange(event){
        setTaskText(event.target.value)
    }

    function handleButtonClick(e){
        e.preventDefault();
        if (taskText.trim())
            addTodo({
                id: Date.now(),
                text: taskText,
                completed: false
            })
            setTaskText("")
    }
    return(
        <>
        <div>
        <div className="box">
            <input value={taskText} onChange={handleTaskChange} placeholder="what is next? "></input>
            <button type="submit" onClick={handleButtonClick}>add</button>   
        </div>
        </div>

        </>
    )
}