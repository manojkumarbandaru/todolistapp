import React, { Component } from 'react';
import '../cssfiles/TodoComponent.css'
class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            edit: false,
            id: null,
            mockData: [{
                id: '1',
                title: 'Buy Milk.',
                done: false,
                date: new Date()
            }, {
                id: '2',
                title: 'Meeting with Ali.',
                done: false,
                date: new Date()
            }, {
                id: '3',
                title: 'Tea break.',
                done: false,
                date: new Date()
            }, {
                id: '4',
                title: 'Go for a run.',
                done: false,
                date: new Date()
            }]
        }
        this.onSubmitHandle = this.onSubmitHandle.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    onSubmitHandle(event) {
        event.preventDefault();

        this.setState({
            mockData: [...this.state.mockData, {
                id: Date.now(),
                title: event.target.item.value,
                done: false,
                date: new Date()
            }]
        });

        event.target.item.value = '';
    }

    handleEdit(ID, Title) {
        this.setState({
            edit: true,
            id: ID,
            title: Title
        })
    }
    renderUpdate() {
        if (this.state.edit) {
            return (
                <form onSubmit={this.handleUpdate}>
                    <input type="text" name="updateItem" defaultValue={this.state.title} />
                    <button>Update</button>
                </form>
            )
        }
    }
    handleUpdate(event) {
        event.preventDefault();

        this.setState({
            edit:false,
            mockData: this.state.mockData.map(
                item => {
                    if (item.id === this.state.id) {
                        console.log(item.id + " " + event.target.updateItem.value);
                        item.title = event.target.updateItem.value;
                        return item;
                    }
                    return item;
                }
            ),
        },()=>console.log(this.state.edit))

    }
    render() {
        return (
            <div>
                {
                    this.renderUpdate()
                }
                <form onSubmit={this.onSubmitHandle}>
                    <input type="text" name="item" className="item" placeholder="enter TODO" />
                    <button>Add</button>
                </form>
                <ul className="todoList">
                    {this.state.mockData.map(item => (
                        <li key={item.id}>
                            {item.title}
                            <button onClick={this.handleEdit.bind(this, item.id, item.title)}>Edit</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Todo;