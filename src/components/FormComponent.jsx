import React, { Component } from 'react'
import { getCurrentWeather } from '../actions/weatherActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();        
        this.props.getCurrentWeather(this.state.city);
    }

    render() {
        const { city } = this.state;        

        return (
            <div className='search-form'>
                <form className='' noValidate onSubmit={this.handleSubmit} >
                    <div className='input-txt'>
                        <input type='text' placeholder='Enter city name' value={city} onChange={this.handleChange} name='city' />
                    </div>
                    <button className='btn' type='submit'>Get weather</button>
                </form>
            </div>
        )
    }
}

FormComponent.propType = {
    getCurrentWeather: PropTypes.func.isRequired
  }  
 
  export default connect(null, { getCurrentWeather })(FormComponent);
