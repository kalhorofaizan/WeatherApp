import React ,{Component}from 'react';
import {Image,Dimensions} from 'react-native';
import cloudsunny from './img/Cloudsunny.jpg'
import night from './img/night.jpg'
import nightrain from './img/nightRain.jpg'
import sunny from './img/sunny.jpg'
import cloudynight from './img/clodynight.jpg'
import fog from './img/fog.jpg'
import snow from './img/snow.jpg'
import wind from './img/wind.jpg'

export default class Wallpaper extends Component {
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
                this.image=nightrain;

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
                this.image=cloudsunny;
                break;
            case 'partly-cloudy-night':
                this.image=cloudynight;
                break;
            case 'partly-cloudy-day':
                this.image=cloudsunny;
                break;
        }
    }

    render() {

        return (
            <Image  style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height*0.50}}   source={this.image}/>
        );
    }
}
