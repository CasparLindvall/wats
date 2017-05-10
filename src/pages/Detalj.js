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
    },

    graphs: {
        flex: 7,
        backgroundColor:'black',
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
module.exports = Detalj;