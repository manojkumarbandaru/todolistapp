import React, { Component } from 'react'
import TodoList from './TodoList'
class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
        this.AddTodo = this.AddTodo.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleComplete = this.handleComplete.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    AddTodo = (event) => {
        event.preventDefault()
        console.log(this.state.todos)
        this.setState({
            //todos: [this.state.todos, { whattodo: event.target.tododata.value }]
            todos: this.state.todos.concat({ whattodo: event.target.tododata.value })
        }
        )

    }
    handleEdit = () => {
        
    }
    handleDelete=(data)=>{
        this.setState({
            todos:this.todos.splice(this.todos.indexOf(data),1)
        })
    }
    handleComplete=()=>{

    }
    render() {
        return (
            <div>
                <form onSubmit={this.AddTodo}>
                    <input name="tododata" className="tododata" type="text" placeholder="add Todo" />
                    <button>Add</button>
                </form>
                {
                    this.state.todos.map(
                        todo => {
                            return (
                                <div>
                                    <TodoList todoData={todo.whattodo} ></TodoList>
                                    <button onClick={this.handleEdit}>Edit</button>
                                    <button onClick={this.handleDelete}>Delete</button>
                                    <button onClick={this.handleComplete}>Complete</button>
                                </div>
                            )
                            // return (
                            //     <ul>
                            //         <li>{todo.whattodo}</li>
                            //     </ul>
                            // )

                        }
                    )
                }
            </div>
        )
    }
}

export default Todo