import React, { Component } from "react";
type CounterMessageType = {
  message: string;
};
type CounterType = {
  count: number;
};

export default class Counter extends Component< CounterMessageType, CounterType > { //< CounterMessageType, CounterType > means this calss conponents aspect this two types
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
