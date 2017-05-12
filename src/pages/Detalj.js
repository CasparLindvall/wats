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
    Button
} = ReactNative;

import ZeroLine from '../graphs/ZeroLineChartScreen';
import styles from   './Styles';
import DatePick from './DatePick';

const dates = 'NU';
const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};


class Detalj extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            date: 'dus wurk?',
        };
    }

    _handlePress() {
        console.log('Pressed!');
    }


    render() {

        return (
            <View style={styles.container}>

                <View style={styles.graphs}>

                    <Text style={styles.topLeft}>
                        Dygnsvy: elvanor under {this.date}
                    </Text>

                    <ZeroLine/>

                </View>

            {/*

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
             */}


                <View style={styles.something}>
                    <DatePick
                        datetime={this.state.date}
                    />
                </View>



            </View>
        );
    }
}

module.exports = Detalj;