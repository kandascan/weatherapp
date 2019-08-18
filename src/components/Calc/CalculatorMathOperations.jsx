import React, { Component } from "react";
import CalculatorInputs from "./CalculatorInputs";

export default class CalculatorMathOperations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: 0
    };
  }

  handleData = data => {
    console.log("Math data:", data);
    this.setState({
      num1: data.num1,
      num2: data.num2
    });
  };
  Add = e => {
    this.setState(
      {
        result: parseInt(this.state.num1) + parseInt(this.state.num2)
      },
      () => this.props.sendResult(this.state.result)
    );
  };
  Minus = e => {
    this.setState({
      result: parseInt(this.state.num1) - parseInt(this.state.num2)
    },
    () => this.props.sendResult(this.state.result));
  };
  Multiple = e => {
    this.setState({
      result: parseInt(this.state.num1) * parseInt(this.state.num2)
    },
    () => this.props.sendResult(this.state.result));
  };
  Divide = e => {
    this.setState({
      result: parseInt(this.state.num1) / parseInt(this.state.num2)
    },
    () => this.props.sendResult(this.state.result));
  };

  render() {
    return (
      <div>
        <CalculatorInputs sendNumbers={this.handleData} />
        <button className="btn" type="button" onClick={this.Add}>
          Add
        </button>
        <br />
        <br />
        <button className="btn" type="button" onClick={this.Minus}>
          Minus
        </button>
        <br />
        <br />
        <button className="btn" type="button" onClick={this.Multiple}>
          Multiple
        </button>
        <br />
        <br />
        <button className="btn" type="button" onClick={this.Divide}>
          Divide
        </button>
        <br />
        <br />
      </div>
    );
  }
}
