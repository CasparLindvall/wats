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
const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};


class Detalj extends Component {
    constructor(props, context) {
        super(props, context);
    }
    _handlePress() {
        console.log('Pressed!');
    }


    render() {

        return (
            <View style={styles.container}>

                <View style={styles.graphs}>

                    <Text style={styles.topLeft}>
                        Dygnsvy av elvanor
                    </Text>

                    <ZeroLine/>
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
        marginTop: 5,
    },

    graphs: {
        flex: 7,
        backgroundColor:'white',
        elevation: 2,
        margin: 5,
        paddingTop: 5,
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
    },
    topLeft:{
        fontSize: 20,
        fontFamily: 'Lucida Console',
        fontWeight: 'bold',
        color: 'black',

        textShadowColor: 'lightgrey',
        textShadowOffset: {width: 1, height: 1},

        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 10,
    }


});
module.exports = Detalj;