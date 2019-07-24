import React, { Component } from 'react';

class WeatherIconComponent extends Component {
    setIcon = (weatherName) => {
        const icons = [
            {
                name: 'storm',
                icon: 'fas fa-poo-storm'
            },
            {
                name: 'dizzle',
                icon: 'fas fa-cloud-showers-heavy'
            },
            {
                name: 'rain',
                icon: 'fas fa-cloud-rain'
            },
            {
                name: 'snow',
                icon: 'far fa-snowflake'
            },
            {
                name: 'smog',
                icon: 'fas fa-smog'
            },
            {
                name: 'clear',
                icon: 'fas fa-sun'
            },
            {
                name: 'clouds',
                icon: 'fas fa-cloud'
            }
        ];

        return icons.find(x => x.name === weatherName.toLowerCase());
    }

    render() {
        const { weatherName } = this.props;
        let result = this.setIcon(weatherName);
        return (
            <div>
                <i className={result.icon}></i>
            </div>
        )
    }
}

export default WeatherIconComponent;