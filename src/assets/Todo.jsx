/* eslint-disable react/prop-types */
export default function Todo({ task }){
    return(
        <div className="list">
            <p>{task.text}</p>
        </div>
    )
}