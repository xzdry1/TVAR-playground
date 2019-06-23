import React, { Component, Fragment } from 'react';


class TodoList1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: 'asd',
            list: []
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInput.bind(this)} />
                    <button
                        onClick={this.handleSubmit.bind(this)}
                    >submit</button>
                </div>
                <ul>
                    {this.state.list.map((el, index) => {
                        return <li
                            key={index}
                            onClick={this.handleDelete.bind(this, index)}>
                            {el}
                        </li>
                    })}
                </ul>
            </Fragment>
        )
    }
    handleInput(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleDelete(index) {
        let newList = [...this.state.list];
        newList.splice(index, 1);
        this.setState({
            list: newList
        })
    }
    handleSubmit() {
        this.setState({
            inputValue: '',
            list: [...this.state.list, this.state.inputValue]
        })
    }
}

export default TodoList1;