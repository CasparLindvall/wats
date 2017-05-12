import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, processColor
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';

const GREEN = processColor('#71BD6A');
const BLUE = processColor('#8470ff');


class StackedBarChartScreen extends React.Component {

    constructor() {
        super();

        this.state = {
            legend: {
                enabled: true,
                textSize: 15,
                form: "CIRCLE",
                formSize: 15,
                xEntrySpace: 100,
                yEntrySpace: -10,
                wordWrapEnabled: false
            },
            data: {
                dataSets: [{
                    values: [15],
                    label: 'Elkonsumtion',
                    config: {
                    drawValues: true,
                    colors: [processColor('#d8bfd8')],
                    valueTextSize: 20,
                    }
                }, {
                    values: [15],
                    label: 'Elproduktion',
                    config: {
                    drawValues: true,
                    colors: [processColor('#71BD6A')],
                    valueTextSize: 20,
                    }
                }],
                config: {
                    barWidth: 1.2,
                    group: {
                        fromX: 0,
                        groupSpace: 1,
                        barSpace: 1,
                    },
                }
            },
            xAxis: {
                enabled: false,
                valueFormatter: ['', '', '', '', ''],
                granularityEnabled: false,
                granularity: 1,
                axisMaximum: 5,
                axisMinimum: 0,
                centerAxisLabels: false
            },
            yAxis: {
                left: {
                    drawLabels: false,
                    drawAxisLine: false,
                    drawGridLines: false,
                    zeroLine: {
                        enabled: false,
                        lineWidth: 100
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
        if (entry == null ) {
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
                        legend={this.state.legend}
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
        backgroundColor: 'white'
    },
    chart: {
        flex: 1
    }
});


module.exports =  StackedBarChartScreen;