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
        this.onSubmitHandle=this.onSubmitHandle.bind(this)
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
                <form onSubmit={this.onSubmitHandle}>
                    <input type="text" name="item" className="item" placeholder="enter TODO"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default Todo;