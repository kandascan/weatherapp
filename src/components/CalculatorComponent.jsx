import React, { Component } from 'react'
import PropTypes from 'prop-types';
import InputComponent from './InputComponent';
import Result from './ResultCalculationComponent';
import ButtonComponent from './ButtonComponent';

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

    updateResult = (result) => {
        this.setState({
            result: result
        });
    }
    
    render() {
        return (
            <div className='container'>
                <br />
                <br />
                <br />
                <h2>Calculator</h2>                
                <InputComponent placeholder='Enter num 1' value={this.state.num1} onChange={this.handleChange} name='num1' />
                <InputComponent placeholder='Enter num 2' value={this.state.num2} onChange={this.handleChange} name='num2' />
                <ButtonComponent name={'Add'} num1={this.state.num1} num2={this.state.num2} setResult={this.updateResult} />
                <ButtonComponent name={'Minus'} num1={this.state.num1} num2={this.state.num2} setResult={this.updateResult} />
                <ButtonComponent name={'Multiple'} num1={this.state.num1} num2={this.state.num2} setResult={this.updateResult} />
                <ButtonComponent name={'Divide'} num1={this.state.num1} num2={this.state.num2} setResult={this.updateResult} />
                <Result result={this.state.result} />
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