import React, {Component} from 'react';
import {Image} from 'react-native';
import cloudy from './icons/cloudy.png'
import cloudyday from './icons/cloudyday.png'
import cloudynight from './icons/cloudynight.png'
import fog from './icons/fog.png'
import night from './icons/night.png'
import rain from './icons/rain.png'
import snow from './icons/snow.png'
import sunny from './icons/sunny.png'
import wind from './icons/wind.png'

export default class WatherIcon extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(): void {
        this.image='';
        switch(this.props.icon){
            case 'clear-day':
                this.image=sunny;
                break;
            case 'clear-night':
                this.image=night;
                break;
            case 'rain':
                this.image=rain;

                break;
            case 'snow':
                this.image=snow;
                break;
            case 'sleet':
                this.image=snow;
                break;
            case 'wind':
                this.image=wind;
                break;
            case 'fog':
                this.image=fog;
                break;
            case 'cloudy':
                this.image=cloudy;
                break;
            case 'partly-cloudy-night':
                this.image=cloudynight;
                break;
            case 'partly-cloudy-day':
                this.image=cloudyday;
                break;
        }
    }

    render() {
        return (
            <Image  source={this.image} {...this.props} />
        );
    }
}
