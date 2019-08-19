import React, { Component } from 'react'

export default class ButtonComponent extends Component {
    constructor(props) {
        super(props);       
    }
    Action = (name) => {
        let result =0;
        switch(name){
            case 'Add':
               result = parseInt(this.props.num1) + parseInt(this.props.num2);
                break;
                case 'Minus':
               result = parseInt(this.props.num1) - parseInt(this.props.num2);
                break;
                case 'Multiple':
               result = parseInt(this.props.num1) * parseInt(this.props.num2);
                break;
                case 'Divide':
               result = parseInt(this.props.num1) / parseInt(this.props.num2);
                break;
        }

        this.props.setResult(result);
    }

    render() {
        return (
            <div>
                <button className='btn' type='button' onClick={() => this.Action(this.props.name)} >{this.props.name}</button>
                <br />
                <br />
            </div>
        )
    }
}
