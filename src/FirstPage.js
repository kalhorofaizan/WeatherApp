import React from 'react';
import {StyleSheet, Text, View ,Image,Dimensions} from 'react-native';
import image from './img/landscape.png'

const FirstPage =()=> {
    return (
        <View style={{backgroundColor:"white",justifyContent:'center',alignItems:'center',height:Dimensions.get('window').height}}  >
            <Image source={image}  width={128} height={128} style={{height:128, width:128}}  />
            <Text></Text>
        </View>

    );
};
const style=StyleSheet.create({

});

export default FirstPage;