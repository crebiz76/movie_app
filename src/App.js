import React from 'react';

class App extends React.Component{
  state = {
    count: 0
  };
  
  plus = () => {
    console.log("add");
  };
  minus = () => {
    console.log("substract");
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