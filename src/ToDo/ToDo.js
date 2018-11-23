import React from 'react'

class ToDo extends React.Component {

    state = {
        tasks: [],
        filterText: '',
        chosenFilter: 'ALL',
        newTaskText: ''
    }

    createTask = text => ({
        taskText: text,
        isCompleted: false
    })

    addTask = () => this.setState({
        tasks: this.state.tasks.concat(
            this.createTask(
                this.state.newTaskText
            )
        )
    })

    render() {
        return (
            <div>
                ToDo
      </div>
        )
    }
}
export default ToDo