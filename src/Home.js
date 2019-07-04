import React, {Component} from 'react';
import {Text, View,Dimensions,ScrollView} from 'react-native';
import fToc from './code/conversion';
import WallPaper from './Wallpaper';
import WatherIcon from "./WatherIcon";
import Bar from "./Bar";
export default class Home extends Component {
    nae: Date;
    constructor(props){
        super(props);
         this.dailydata=this.props.daily.data;
        this.dailydata.sort(this.sortNumber);
    }
     sortNumber(a, b) {
        return a.time - b.time;
    }

    render() {

        return (
            <View style={{flex:1,backgroundColor:'white'}}   >
                <WallPaper  icon={this.props.current.icon}  />
                <View style={{width:Dimensions.get('window').width*0.85,height:130,elevation: 3,alignSelf:'center' ,backgroundColor:'white', borderRadius:10,position:'absolute',top:Dimensions.get("window").height*0.40,alignItems:'center',justifyContent:'space-around'}} >
                    <Text style={{fontSize:20}}  >{this.props.city}</Text>
                    <Text style={{fontSize:20}}  >{this.props.continent}</Text>
                    <View style={{flexDirection:'row'}}    >
                        <WatherIcon icon={this.props.current.icon}    style={{width:50,height:50}}  />
                        <View style={{marginLeft:5}} >
                            <Text>{this.props.current.icon}</Text>
                            <Text>{fToc(this.props.current.apparentTemperature)} C</Text>
                        </View>
                    </View>
                </View>
                <View style={{height:100}} style={{backgroundColor:'white'}}   />
                <ScrollView  style={{marginTop:66}}  >
                    {this.dailydata.map((data,key)=> {
                           return   <Bar data={data} key={key}  />
                        }
                    )}
                </ScrollView>
            </View>
        );
    }
}
