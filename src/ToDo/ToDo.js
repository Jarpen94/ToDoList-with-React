import React from 'react'
import AddTask from './AddTask';

class ToDo extends React.Component {

    state = {
        tasks: [],
        filterText: '',
        chosenFilter: 'ALL',
        newTaskText: ''
    }

    createTask = text => ({
        taskText: text,
        isCompleted: false,
        key: Date.now() //good enough to make unique key in that case
    })

    addTask = () => this.setState({
        tasks: this.state.tasks.concat(
            this.createTask(
                this.state.newTaskText
            )
        ),
        newTaskText: ''
    })

    deleteTask = taskKey => this.setState({
        tasks: this.state.tasks.filter(
            task => task.key !== taskKey
        )
    })

    completeTask = taskKey => this.setState({
        tasks: this.state.tasks.map(
            task => (
                (task.key === taskKey) ?
                    {
                        ...task,
                        isCompleted: true
                    }
                    :
                    task
            )
        )
    })

    onAllClickHandler = () => this.setState({ chosenFilter: 'ALL' })
    onAllClickHandler = () => this.setState({ chosenFilter: 'COMPLETED' })
    onAllClickHandler = () => this.setState({ chosenFilter: 'UNCOMPLETED' })

    onFilterTextChangeHandler = event => this.setState({ filterText: event.target.value })
    onNewTaskTextChangeHandler = event => this.setState({ newTaskText: event.target.value })


    render() {
        return (
            <div>
                {/*remember to import it */}
                < AddTask />
            </div>
        )
    }
}
export default ToDo