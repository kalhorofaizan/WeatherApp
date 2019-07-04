/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from "./src/Home";
import FirstPage from "./src/FirstPage";
import axios from 'axios'

export default class App extends Component<Props> {
  constructor(){
    super();
    this.state={
      current:{},
      daily:{},
      city:'',
      continent:'',
      showHome:false
    };
  }

  componentWillMount(){
  navigator.geolocation.getCurrentPosition((position)=>{
        axios.get('https://api.darksky.net/forecast/2d573a3aa1fe99b64b56102795d073ed/'+position.coords.latitude+','+position.coords.longitude)
            .then((data)=>{
              const {currently,timezone,daily}=data.data;
              const place=timezone.split('/');
              const {apparentTemperature,icon}=currently;
              this.setState({
                current:{apparentTemperature,icon},
                daily:daily,
                city:place[1],
                continent:place[0],
                showHome:true
              });
            })
  })
  }

  render() {
    return (
      <View style={{flex:1}}>
        {this.state.showHome ? <Home current={this.state.current}  daily={this.state.daily} city={this.state.city}  continent={this.state.continent}  />:<FirstPage/>}
      </View>
    );
  }
}