/**
 * Created by Caspar on 2017-05-08.
 */
import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';

const GREEN = processColor('#71BD6A');
{/*BLUE*/}
const RED = processColor('#8470ff');

class ZeroLineChartScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            valueHour: [],
            valueColor: [],
            data: {
                dataSets: [{
                    values: [{y: 1}, {y: -2}, {y: -2}, {y: -2}, {y: 0}, {y: 1}, {y: 2}, {y: 5}, {y: 6}, {y: 1}, {y: -1}, {y: -2},{y: -2}, {y: 1}, {y: -1}, {y: -1}, {y: 2}, {y: 4}, {y: 5}, {y: 6}, {y: 5}, {y: 3}, {y: 2}, {y: 2}],
                    label: 'Zero line dataset', /*DON'T REMOVE!!!*/
                    config: {
                        drawValues: false,
                        colors: [GREEN, RED, RED, RED, GREEN,GREEN, GREEN , GREEN , GREEN, GREEN,RED, RED, RED, GREEN, RED, RED, GREEN,GREEN, GREEN , GREEN , GREEN, GREEN,GREEN, GREEN]
                    }
                }],
            },
            xAxis: {
                //valueFormatter: ['00:00', '', '', '', '',  '', '06:00', '', '', '', '',  '', '12:00', '', '', '', '',  '', '23:59'],
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
        };
    }

    handleSelect(event) {
        let entry = event.nativeEvent
        if (entry == null) {
            this.setState({...this.state, selectedEntry: null})
        } else {
            this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
        }
    }

    render() {
        return (

            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <BarChart
                        style={styles.chart}
                        data={this.state.data}
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

module.exports = ZeroLineChartScreen;