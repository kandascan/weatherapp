import React, { Component } from 'react';

class WeatherIconComponent extends Component {
    setIcon = (weatherName) => {
        const icons = [
            {
                name: ['Thunderstorm', 'Storm'],
                icon: 'fas fa-poo-storm'
            },
            {
                name: ['Drizzle'],
                icon: 'fas fa-cloud-showers-heavy'
            },
            {
                name: ['Rain'],
                icon: 'fas fa-cloud-rain'
            },
            {
                name: ['Snow'],
                icon: 'far fa-snowflake'
            },
            {
                name: ['Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Dust', 'Ash', 'Squall', 'Tornado'],
                icon: 'fas fa-smog'
            },
            {
                name: ['Clear'],
                icon: 'fas fa-sun'
            },
            {
                name: ['Clouds'],
                icon: 'fas fa-cloud'
            }
        ];

        return icons.find(x => x.name.includes(weatherName));
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