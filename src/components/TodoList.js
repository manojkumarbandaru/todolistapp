import React, { Component } from 'react'

class TodoList extends Component {
    render() {
        return (
                <ul>
                    <li>{this.props.todoData}</li>
                </ul>
        )
    }
}

export default TodoList