import React, { Component } from 'react'
import TodoList from './TodoList'
class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            todos: []
        }
        this.AddTodo = this.AddTodo.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleComplete = this.handleComplete.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    AddTodo = (event) => {
        event.preventDefault()
        this.setState({
            //todos: [this.state.todos, { whattodo: event.target.tododata.value }]
            id: this.state.id + 1,
            todos: this.state.todos.concat({ id: this.state.id, whattodo: event.target.tododata.value })
        },
            () => {
                this.state.todos.map(
                    item => console.log(item.id)
                )
            }
        )

    }
    handleEdit = () => {

    }
    handleDelete = (data) => {
        this.setState({
            todos: this.state.todos.filter(
                todo => {
                    if (todo !== data)
                        return todo
                }
            )
        })
    }
    handleComplete = () => {

    }
    render() {
        return (
            <div>
                <form onSubmit={this.AddTodo}>
                    <input name="tododata" className="tododata" type="text" placeholder="add Todo" />
                    <button>Add</button>
                </form>

                {/* <TodoList todoData={todo.whattodo} ></TodoList>  */}
                <ul>
                    {
                        this.state.todos.map(
                            todo => {
                                return (
                                    <li key={todo.id}>
                                        {todo.id}
                                        {todo.whattodo}
                                        <button onClick={this.handleEdit}>Edit</button>
                                        <button onClick={() => this.handleDelete(todo)}>Delete</button>
                                        <button onClick={this.handleComplete}>Complete</button>
                                    </li>
                                )
                            })
                    }
                </ul>
            </div>
        )
    }
}

export default Todo