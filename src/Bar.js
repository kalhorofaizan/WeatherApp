import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WatherIcon from "./WatherIcon";
import ftod from './code/conversion'
const Bar =(props)=> {
    return (
        <View style={{flexDirection:'row',justifyContent:"space-around",alignItems:'center' ,backgroundColor:'white' }} >
            <Text  >{new Date(props.data.time*1000).getMonth()+1}/{new Date(props.data.time*1000).getDate()}</Text>
            <WatherIcon icon={props.data.icon}    style={{width:50,height:50}}  />
            <Text  >{ftod(props.data.temperatureHigh)} deg</Text>
        </View>
    );
};

export default Bar;