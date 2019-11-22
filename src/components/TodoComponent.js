import React, { Component } from 'react';

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


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandle.bind(this)}>
                    <input type="text" name="item" placeholder="enter TODO" />
                    <button>Add</button>
                </form>
                <ul>
                    {this.state.mockData.map(item => (
                        <li key={item.id} className={item.done ? 'done' : 'hidden'}
                        >
                            {item.title}
                            <button onClick = {this.onDeleteHandle.bind(this, item.id)}>Delete</button>


                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    onDeleteHandle() {
        let id = arguments[0];
        this.setState({ mockData: this.state.mockData.filter(item => { if (item.id !== id) { return item; } }) });
    }

}

export default Todo;