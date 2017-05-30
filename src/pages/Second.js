/**
 * Created by Caspar on 2017-05-10.
 */
import React,{Component} from 'react'
var ReactNative = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    Image,
    Easing,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Alert,
    Button,
    processColor
} = ReactNative;

import BarP from '../graphs/Bar';
import styles from '../components/Styles';

import {BarChart} from 'react-native-charts-wrapper';

const GREEN = processColor('#71BD6A');
const RED = processColor('#D14B5A');


const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};


class Second extends Component {
    constructor() {
        super();

        this.state = {
            timeP: 'vecka 22',
            prod: 13.12,
            kons: 4.32
        }
    }

    getDay = () => {
        //Alert.alert('Button has been pressed!');
        this.setState({prod: 4.352, kons: 1.23, timeP: '1/6'});
    }

    getWeek = () => {
        //Alert.alert('Button has been pressed!');
        this.setState({prod: 13.12, kons: 4.32, timeP: 'vecka 22'});
    }

    getMonth= () => {
        //Alert.alert('Button has been pressed!');
        this.setState({prod: 4.352, kons: 1.23, timeP: 'Juni'});
    }

    getYear = () => {
        //Alert.alert('Button has been pressed!');
        this.setState({prod: 1164.42, kons: 931.23, timeP: '2017'});
    }



    _handlePress() {
        console.log('Pressed!');
    }


    render() {
        let pic = {
            uri: 'http://watt-s.com/wp-content/themes/watt-s/assets/img/watts_logo.png'
        };
        return (
            <View style={styles.container}>

                <View style={styles.graphs}>

                    <Text style={styles.topLeft}>
                        Övverblick:  {this.state.timeP}
                    </Text>

                    <BarP style={{flex: 1}}
                          kons = {this.state.kons}
                          prod = {this.state.prod}
                    />

                </View>


                <View style={styles.button}>


                    <View style = {styles.button1}>
                        <Button
                            onPress={this.getDay}
                            title="Dag"
                            accessibilityLabel="See an informative alert"/>
                    </View>


                    <View style = {styles.button1}>
                        <Button
                            onPress={this.getWeek}
                            title="Vecka"
                            accessibilityLabel="See an informative alert"/>
                    </View>

                    <View style = {styles.button1}>
                        <Button
                            onPress={this.getMonth}
                            title="Månad"
                            accessibilityLabel="See an informative alert"/>
                    </View>

                    <View style = {styles.button1}>
                        <Button
                            onPress={this.getYear}
                            title="År"
                            accessibilityLabel="See an informative alert"/>
                    </View>



                </View>



                <View style={styles.something}>
                </View>


            </View>
        );
    }
}
module.exports = Second;


