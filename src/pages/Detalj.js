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
import styles from   '../components/Styles';
import DatePick from '../components/DatePick';

let dateFormat = require('dateformat');
let now = new Date();

let value1 = [{y: 1}, {y: -2}, {y: -2}, {y: -2}, {y: 0}, {y: 1}, {y: 2}, {y: 5}, {y: 6}, {y: 1}, {y: -1}, {y: -2},{y: -2}, {y: 1}, {y: -1}, {y: -1}, {y: 2}, {y: 4}, {y: 5}, {y: 6}, {y: 5}, {y: 3}, {y: 2}, {y: 2}];
let value2 = [{y: 2}, {y: 1}, {y: -2}, {y: -2}, {y: -2}, {y: 0}, {y: 1}, {y: 2}, {y: 5}, {y: 6}, {y: 1}, {y: -1}, {y: -2},{y: -2}, {y: 1}, {y: -1}, {y: -1}, {y: 2}, {y: 4}, {y: 5}, {y: 6}, {y: 5}, {y: 3}, {y: 2}]

let index = 0;
let values = [value1, value2];
let values2 = [1, 100];

class Detalj extends Component {
    constructor(props) {
        super(props);

        //dateFormat(now, "dd, mm, yyyy");
        this.state = {
            dates: dateFormat(now, "dd-mm-yyyy").toString(),//'dus wurk?', //getDate -> child
            valueDay: 1000
        };
    }

    //<MyChild myFunc={this.handleChildFunc.bind(this)} />

    getDate(newDate){
        if(index == 0){
            index = 1;
        }
        else{
            index = 0;
        }
        this.setState({dates: newDate, valueDay: values2[index]});
    }

    componentDidUpdate() {
        //this.foo.updateValue(this.valueDay);
    }

    render() {

        return (
            <View style={styles.container}>

                <View style={styles.graphs}>

                    <Text style={styles.topLeft}>
                        Detalj: {this.state.dates} and {this.state.valueDay.toString()}
                    </Text>

                    <ZeroLine ref={(foo) => { this.foo = foo; }}/>

                </View>

                <View style={styles.something}>
                    <DatePick
                        //<MyChild myFunc={this.handleChildFunc.bind(this)} />
                        setDate={this.getDate.bind(this)}
                    />
                </View>



            </View>
        );
    }
}

module.exports = Detalj;