import React, { Component } from 'react';
import './App.css';
import Popular from './components/Popular';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Popular />
        <Counter />
        <TodoList />
      </div>
    );
  }
}

export default App;
