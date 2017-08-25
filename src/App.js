import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Popular from './components/Popular';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Route path='/popular' component={Popular} />
          <Route path='/counter' component={Counter} />
          <Route path='/todolist' component={TodoList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
