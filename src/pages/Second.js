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

import BarP from '../graphs/barMainK';

import {BarChart} from 'react-native-charts-wrapper';

const GREEN = processColor('#71BD6A');
const RED = processColor('#D14B5A');

const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};

class Second extends Component {
    constructor() {
        super();
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

                    <BarP style={{flex: 1}}/>


                </View>


                <View style={styles.button}>


                    <View style = {styles.button1}>
                        <Button
                            onPress={onButtonPress}
                            title="Dag"
                            accessibilityLabel="See an informative alert"/>
                    </View>


                    <View style = {styles.button1}>
                        <Button
                            onPress={onButtonPress}
                            title="Vecka"
                            accessibilityLabel="See an informative alert"/>
                    </View>

                    <View style = {styles.button1}>
                        <Button
                            onPress={onButtonPress}
                            title="Månad"
                            accessibilityLabel="See an informative alert"/>
                    </View>

                    <View style = {styles.button1}>
                        <Button
                            onPress={onButtonPress}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    graphs: {
        flex: 7,
        backgroundColor:'white',
    },

    button: {
        flexDirection: 'row',
        flex: 1,
    },


    button1 : {
        flexDirection: 'column',
        flex: 1,
        padding: 2,
    },

    something: {
        flex: 2,
    }

});
module.exports = Second;


