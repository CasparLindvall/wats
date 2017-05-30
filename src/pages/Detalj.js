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

class Detalj extends Component {
    constructor(props) {
        super(props);

        //dateFormat(now, "dd, mm, yyyy");
        this.state = {
            dates: dateFormat(now, "dd-mm-yyyy").toString(),//'dus wurk?', //getDate -> child
            valueDay: [-2, -3, -2, 0, 1, 1, 2, -2, -3, 2, 3, 4, 6, 8, 8 , 8, 5,-5, -6, -6, -7, -3, -3,-2],
            colorDay: [RED, RED, RED, RED, GREEN,GREEN, GREEN , RED, RED, GREEN,GREEN, GREEN, GREEN, GREEN, GREEN, GREEN, GREEN,RED, RED, RED, RED, RED,RED, RED]
        };
    }

    getColor(array){
        let newColor = [];
        for(let i = 0; i < array.length; i++) {
            newColor[i] = array[i] > 0 ? GREEN : RED;
        }
    }

    genData(){
        //newStates = Math.floor((Math.random() * 10) - 5);
        let newData = [[], []];

        for(let i = 0; i < 23; i++) {
            let x = Math.floor((Math.random() * 10) - 4);
            newData[0][i]  = x;
            if(x > 0) {
                newData[1][i] = GREEN
            }
            else{
                newData[1][i] = RED;
            }
        }
        return newData;
    }

    getDate(newDate){
        let newStates = this.genData();
        this.setState({dates: newDate, valueDay: newStates[0], colorDay: newStates[1]});
        //this.zeroRef.updateData(newStates[0], newStates[1]);
    }

    render() {

        return (
            <View style={styles.container}>

                <View style={styles.graphs}>

                    <Text style={styles.topLeft}>
                        Detalj: {this.state.dates}
                    </Text>

                    <ZeroLine valueDay = {this.state.valueDay}
                              colorDay = {this.state.colorDay}/>

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