import React, { Component } from "react";

export default class CalculatorInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0
    };
  }

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => this.props.sendNumbers(this.state)
    );
  };

  render() {
    return (
      <div>
        <div className="input-txt">
          <input
            type="text"
            placeholder="Enter num 1"
            value={this.state.num1}
            onChange={this.handleChange}
            name="num1"
          />
        </div>
        <div className="input-txt">
          <input
            type="text"
            placeholder="Enter num 2"
            value={this.state.num2}
            onChange={this.handleChange}
            name="num2"
          />
        </div>
      </div>
    );
  }
}
