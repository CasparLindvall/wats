/**
 * Created by Caspar on 2017-05-08.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor,
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';
import update from 'immutability-helper';
import _ from 'lodash';

const GREEN = processColor('#71BD6A');
{/*BLUE*/}
const RED = processColor('#8470ff');

var value1 = [{y: 15}, {y: 1}, {y: -2}, {y: -2}, {y: -2}, {y: 0}, {y: 1}, {y: 2}, {y: 5}, {y: 6}, {y: 1}, {y: -1}, {y: -2},{y: -2}, {y: 1}, {y: -1}, {y: -1}, {y: 2}, {y: 4}, {y: 5}, {y: 6}, {y: 5}, {y: 3}, {y: 2}, {y: 2}];
var value2 = [{y: -15}, {y: 1}, {y: -2}, {y: -2}, {y: -2}, {y: 0}, {y: 1}, {y: 2}, {y: 5}, {y: 6}, {y: 1}, {y: -1}, {y: -2},{y: -2}, {y: 1}, {y: -1}, {y: -1}, {y: 2}, {y: 4}, {y: 5}, {y: 6}, {y: 5}, {y: 3}, {y: 2}, {y: 2}];
let color2 = [GREEN, RED, RED, RED, GREEN,GREEN, GREEN , GREEN , GREEN, GREEN,RED, RED, RED, GREEN, RED, RED, GREEN,GREEN, GREEN , GREEN , GREEN, GREEN,GREEN, GREEN];

let value = []

//var ind = 0;
export default class ZeroLineChartScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                    dataSets: [{
                        values: this.props.valueDay,//[{y: 1}, {y: -2}, {y: -2}, {y: -2}, {y: 0}, {y: 1}, {y: 2}, {y: 5}, {y: 6}, {y: 1}, {y: -1}, {y: -2},{y: -2}, {y: 1}, {y: -1}, {y: -1}, {y: 2}, {y: 4}, {y: 5}, {y: 6}, {y: 5}, {y: 3}, {y: 2}, {y: 2}],//this.props.valueDay,
                        label: ' ',//this.props.dates, DON'T REMOVE!!!
                        config: {
                            drawValues: false,
                            colors: color2//this.props.colorDay
                        }
                    }],
                },
            xAxis: {
                    //valueFormatter: ['A', 'B', 'C', 'D', 'E']
            },
            yAxis: {
                    left: {
                        drawLabels: true,
                        drawAxisLine: true,
                        drawGridLines: true,
                        zeroLine: {
                            enabled: true,
                            lineWidth: 1.5
                        }
                    },
                    right: {
                        enabled: false
                    }
            }
        }
    }

    //let newStudent = update(student, {grades:{$set: ['A','A','B']}})

/*
    componentDidMount() {
            this.setState(
            update(this.state, {
                ind: {
                    $set: this.props.valueDay
                },
                data: {
                    $set: {
                        dataSets: [{
                            values: this.ind === 0 ? value2: value1,//[{y: 1}, {y: -2}, {y: -2}, {y: -2}, {y: 0}, {y: 1}, {y: 2}, {y: 5}, {y: 6}, {y: 1}, {y: -1}, {y: -2},{y: -2}, {y: 1}, {y: -1}, {y: -1}, {y: 2}, {y: 4}, {y: 5}, {y: 6}, {y: 5}, {y: 3}, {y: 2}, {y: 2}],//this.props.valueDay,
                            label: ' ',//this.props.dates, DON'T REMOVE!!!
                            config: {
                                drawValues: false,
                                colors: [GREEN, RED, RED, RED, GREEN,GREEN, GREEN , GREEN , GREEN, GREEN,RED, RED, RED, GREEN, RED, RED, GREEN,GREEN, GREEN , GREEN , GREEN, GREEN,GREEN, GREEN]
                            }
                        }],
                    }
                },
                xAxis: {
                    $set: {
                       //valueFormatter: ['A', 'B', 'C', 'D', 'E']
                    }
                },
                yAxis: {
                    $set: {
                        left: {
                            drawLabels: true,
                            drawAxisLine: true,
                            drawGridLines: true,
                            zeroLine: {
                                enabled: true,
                                lineWidth: 1.5
                            }
                        },
                        right: {
                            enabled: false
                        }
                    }
                }
            })
        );
    }
*/


    handleSelect(event) {
        let entry = event.nativeEvent
        if (entry == null) {
            this.setState({...this.state, selectedEntry: null})
        } else {
            this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
        }
    }

    _randomYValues(range: number, size: number) {
        return _.times(size, (index) => {
            return {
                y: Math.random() * range,
                size: Math.random() * range
            };
        });
    }

    updateData(newValue, newColor){
        this.setState({
                data: {
                        dataSets: [{
                            //values: newValue,//this.props.valueDay,//[{y: 1}, {y: -2}, {y: -2}, {y: -2}, {y: 0}, {y: 1}, {y: 2}, {y: 5}, {y: 6}, {y: 1}, {y: -1}, {y: -2},{y: -2}, {y: 1}, {y: -1}, {y: -1}, {y: 2}, {y: 4}, {y: 5}, {y: 6}, {y: 5}, {y: 3}, {y: 2}, {y: 2}],//this.props.valueDay,
                            label: ' ',//this.props.dates, /*DON'T REMOVE!!!*/
                            config: {
                                drawValues: false,
                                //colors: newColor,//this.props.color
                            }
                        }],
                }
        })
    }

    componentDidMount() {
        const updatedValue = 10;
        this.setState(
            update(this.state, {
                data: {
                    $set: {
                        dataSets: [{
                            values: this.props.valueDay,//[{y: 1}, {y: -2}, {y: -2}, {y: -2}, {y: 0}, {y: 1}, {y: 2}, {y: 5}, {y: 6}, {y: 1}, {y: -1}, {y: -2},{y: -2}, {y: 1}, {y: -1}, {y: -1}, {y: 2}, {y: 4}, {y: 5}, {y: 6}, {y: 5}, {y: 3}, {y: 2}, {y: 2}],//this.props.valueDay,
                            label: ' ',//this.props.dates, /*DON'T REMOVE!!!*/
                            config: {
                                drawValues: false,
                                colors: this.props.colorDay
                            }
                        }],
                    }
                },
            })
        );
    }


    render() {
        return (

            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <BarChart
                        style={styles.chart}
                        //data={this.state.data}
                        data={{
                            dataSets: [{
                            values: this.props.valueDay,//[{y: 1}, {y: -2}, {y: -2}, {y: -2}, {y: 0}, {y: 1}, {y: 2}, {y: 5}, {y: 6}, {y: 1}, {y: -1}, {y: -2},{y: -2}, {y: 1}, {y: -1}, {y: -1}, {y: 2}, {y: 4}, {y: 5}, {y: 6}, {y: 5}, {y: 3}, {y: 2}, {y: 2}],//this.props.valueDay,
                            label: ' ',//this.props.dates, /*DON'T REMOVE!!!*/
                            config: {
                                drawValues: false,
                                colors: this.props.colorDay
                                }
                                }],
                        }}
                        xAxis={this.state.xAxis}
                        yAxis={this.state.yAxis}
                        description={{text: 'where is dis'}}
                        legend={{enabled: false}}
                        onSelect={this.handleSelect.bind(this)}
                        chartDescription = {{text: ' '}}
                        touchEnabled={false}
                    />
                </View>
            </View>

        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    chart: {
        flex: 1
    },
    chosenDate: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
});