import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty } from '../helpers/isEmpty';
import WeatherIcon from './WeatherIconComponent';
import FormComponent from './FormComponent';
import { clearWeather } from '../actions/weatherActions';

class CurrentWeatherComponent extends Component {
    btnClickBack = () => {
        this.props.clearWeather();
    }
    render() {
        const { weather } = this.props;
        return (
            <div className='container'>
                {!isEmpty(weather.currentWeather) ? (
                    <div className='weather-container'>
                        <h2>{weather.currentWeather.name}</h2>
                        <WeatherIcon iconCode={weather.currentWeather.cod} weatherName={weather.currentWeather.weather[0].main} />
                        <h2>{weather.currentWeather.weather[0].main}</h2>
                        <div className='temperature'>
                            <h3>Temperature: {weather.currentWeather.main.temp} &deg; C</h3>
                            <div className='temperature-container'>
                                <div className='temperature-box'>
                                    <h5>Min: {weather.currentWeather.main.temp_min} &deg; C</h5>
                                </div>
                                <div className='temperature-box'>
                                    <h5>Max: {weather.currentWeather.main.temp_max} &deg; C</h5>
                                </div>
                            </div>
                            <h3><i className="fas fa-wind"></i> Wind: {weather.currentWeather.wind.speed} km/h</h3>
                        </div>
                        <button className='btn' onClick={this.btnClickBack}>Back</button>
                    </div>
                ) : (<FormComponent />)}
            </div>
        )
    }
}

CurrentWeatherComponent.propType = {
    weather: PropTypes.object.isRequired,
    clearWeather: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    weather: state.weather
});
export default connect(mapStateToProps, { clearWeather })(CurrentWeatherComponent);
