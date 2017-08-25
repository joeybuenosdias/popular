import React, { Component } from 'react';
import './App.css';
import Popular from './components/Popular';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Popular />
        <Counter />
      </div>
    );
  }
}

export default App;
