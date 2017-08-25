import React from 'react';

class TodoList extends React.Component{

  state = { todos: [], completed: false }

  addTodo = (e) => {
    e.preventDefault();
    let item = this.refs.task.value;
    this.setState({todos: [item, ...this.state.todos]})
    this.refs.form.reset();
  }

  toggleTodo = (e) => {
    this.setState({ completed: !this.state.completed})
  }


  render(){

    return(
      <div>
        <form ref='form'>
          <input ref='task' type='text'/>
          <button onClick={this.addTodo}>ADD</button>
        </form>
        <ul className='todolist'>
          {this.state.todos.map( (todo, index) => {
            return (
              <li
                key={index}
                onClick={this.toggleTodo}
                >
                {todo}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TodoList;
