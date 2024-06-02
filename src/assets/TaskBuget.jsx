import { useState } from "react"

export default function TaskBuget(){
    const [task, setTask] = useState("what is you task");

    function handleTaskChange(event){
        setTask(event.target.value)
    }

    function handleButtonClick(){
        console.log("click ")
    }
    return(
        <>
        <div className="box">
            <input value={task} onChange={handleTaskChange}></input>
            <button type="submit" onClick={handleButtonClick}>add</button>
        </div>
        </>
    )
}