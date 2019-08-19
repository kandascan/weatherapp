import React, { Component } from 'react'

export default class InputComponent extends Component {
    constructor(props) {
        super(props);       
    }
    
    handleChange = (e) => {
        this.props.onChange(e);
    }
    
    render() {
        return (
            <div className='input-txt'>
             <input type='text' placeholder={this.props.placeholder} value={this.props.value} onChange={this.handleChange.bind(this)} name={this.props.name} />
            </div>
        )
    }
}
