import React from 'react'

const completeStyle = {
    textDecoration: 'line-through'
}


const Task = (props) => (
    <div>
        <div
            onClick={() => props.completeTask(props.task.key)}
            style={props.task.isCompleted ? completeStyle : {}}
        >
            {props.task.taskText}
        </div>
        <button
            onClick={() => props.deleteTask(props.task.key)}
        >
            DELETE
</button>
    </div>

)

export default Task