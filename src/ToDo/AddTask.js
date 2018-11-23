import React from 'react'

const AddTask = (props) => (
    <div>
        <input
            type="text"
            value={this.state.newTaskText}
            onChange={this.onNewTaskTextChangeHandler}
        />
        <button
            onClick={this.addTask}
        >
            Add Task!
                </button>
    </div>
)

export default AddTask