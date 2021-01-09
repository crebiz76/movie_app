import React from 'react';

class App extends React.Component{
  state = {
    count: 0
  };
  
  plus = () => {
    console.log("add");
    // this.state.count += 1; // Not working
    // this.setState({ count: this.state.count + 1 }) // Not recommended
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    console.log("substract");
    // this.state.count -= 1; // Not working
    // this.setState({ count: this.state.count - 1 }) // Not recommended
    this.setState(current => ({count: current.count - 1}));
  };

  render(){
    return (
      <div>
        <h1>I am a class component. </h1>
        <h2>The number is {this.state.count}.</h2>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }  
}

export default App;