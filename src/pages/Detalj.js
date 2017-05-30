/**
 * Created by Caspar on 2017-05-10.
 */
import React,{Component} from 'react'
var ReactNative = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    processColor
} = ReactNative;

import ZeroLine from '../graphs/ZeroLineChartScreen';
import styles from   '../components/Styles';
import DatePick from '../components/DatePick';

let dateFormat = require('dateformat');
let now = new Date();

const GREEN = processColor('#71BD6A');
{/*BLUE*/}
const RED = processColor('#8470ff');

let value = [{y: 100}, {y: -2}, {y: -2}, {y: -2}, {y: 0}, {y: 1}, {y: 2}, {y: 5}, {y: 6}, {y: 1}, {y: -1}, {y: -2},{y: -2}, {y: 1}, {y: -1}, {y: -1}, {y: 2}, {y: 4}, {y: 5}, {y: 6}, {y: 5}, {y: 3}, {y: 2}, {y: 2}];
let value2 = [{y: 200}, {y: 1}, {y: -20}, {y: -2}, {y: -2}, {y: 0}, {y: 1}, {y: 2}, {y: 5}, {y: 6}, {y: 1}, {y: -1}, {y: -2},{y: -2}, {y: 1}, {y: -1}, {y: -1}, {y: 2}, {y: 4}, {y: 5}, {y: 6}, {y: 5}, {y: 3}, {y: 2}]
let color = [GREEN, RED, RED, RED, GREEN,GREEN, GREEN , GREEN , GREEN, GREEN,RED, RED, RED, GREEN, RED, RED, GREEN,GREEN, GREEN , GREEN , GREEN, GREEN,GREEN, GREEN];

let index = 0;
class Detalj extends Component {
    constructor(props) {
        super(props);

        //dateFormat(now, "dd, mm, yyyy");
        this.state = {
            dates: dateFormat(now, "dd-mm-yyyy").toString(),//'dus wurk?', //getDate -> child
            flag: 99,
            valueDay: value2
        };
    }

    getColor(array){
        for(let i = 0; i < array.length; i++) {
            color[i] = array[i] > 0 ? GREEN : RED;
        }
    }

    genData(){
        value = Math.floor((Math.random() * 10) - 5);
        //color = value.map((value) => this.getColor(value))
        //this.getColor(value);
    }

    getDate(newDate){
        if(index === 0){
            index = 1;
        }
        else{
            index = 0;
        }
        this.setState({dates: newDate, flag: index});
        this.genData();
        this.zeroRef.updateData(value, color);
    }

    render() {

        return (
            <View style={styles.container}>

                <View style={styles.graphs}>

                    <Text style={styles.topLeft}>
                        Detalj: {this.state.dates} and {this.state.flag.toString()}
                    </Text>

                    <ZeroLine ref={(zeroRef) => { this.zeroRef = zeroRef; }}
                        valueDay = {this.state.valueDay}/>

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