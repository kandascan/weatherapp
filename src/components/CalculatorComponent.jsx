import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class CalculatorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            result: 0,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    Add = (e) => {
        this.setState({
            result: parseInt(this.state.num1) + parseInt(this.state.num2)
        });
    }
    Minus = (e) => {
        this.setState({
            result: parseInt(this.state.num1) - parseInt(this.state.num2)
        });
    }
    Multiple = (e) => {
        this.setState({
            result: parseInt(this.state.num1) * parseInt(this.state.num2)
        });
    }
    Divide = (e) => {
        this.setState({
            result: parseInt(this.state.num1) / parseInt(this.state.num2)
        });
    }
    render() {
        return (
            <div className='container'>
                <br />
                <br />
                <br />
                <h2>Calculator</h2>                
                <div className='input-txt'>
                    <input type='text' placeholder='Enter num 1' value={this.state.num1} onChange={this.handleChange} name='num1' />
                </div>
                <div className='input-txt'>
                    <input type='text' placeholder='Enter num 2' value={this.state.num2} onChange={this.handleChange} name='num2' />
                </div>
                <button className='btn' type='button' onClick={this.Add} >Add</button>
                <br />
                <br />
                <button className='btn' type='button' onClick={this.Minus} >Minus</button>
                <br />
                <br />
                <button className='btn' type='button' onClick={this.Multiple} >Multiple</button>
                <br />
                <br />
                <button className='btn' type='button' onClick={this.Divide} >Divide</button>
                <br />
                <br />
                <h2>Result: {this.state.result}</h2>
            </div>
        )
    }
}

CalculatorComponent.propType = {
    calc: PropTypes.object.isRequired,
    addTwoNumbers: PropTypes.func.isRequired,
    minusTwoNumbers: PropTypes.func.isRequired,
    multipleTwoNumbers: PropTypes.func.isRequired,
    divideTwoNumbers: PropTypes.func.isRequired
}
  


export default CalculatorComponent;