import React from 'react';

class Counter extends React.Component{

  state = { number: 0}

  addOne = (e) => {
    let {number} = this.state;
    this.setState({number: ++number})
  }

  minOne = (e) => {
    let {number} = this.state;
    this.setState({number: --number})
  }

  render(){

    return(
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.addOne}>+</button>
        <button onClick={this.minOne}>-</button>
      </div>
    )
  }
}

export default Counter;
