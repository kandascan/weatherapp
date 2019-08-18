import React, { Component } from "react";
import CalculatorMathOperations from "./CalculatorMathOperations";

class CalculatorResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    };
  }
  handleResult = data => {
    console.log(data);
    this.setState({
      result: data
    });
  };
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <h2>Calculator</h2>
        <CalculatorMathOperations sendResult={this.handleResult} />
        <h2>Result: {this.state.result}</h2>
      </div>
    );
  }
}
export default CalculatorResult;
