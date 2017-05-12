import React from 'react';
import {
  StyleSheet,
  Text,
  View, processColor
} from 'react-native';
import reactAddonsUpdate from 'react-addons-update';
import {LineChart} from 'react-native-charts-wrapper';
/*
var konsum = [10, 100, 150, 200];
var prod   = [5, 50, 75, 100];
var norm = [100, 100, 100, 100;]
*/
class LineChartScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      date: 'xxxx-yy-zz',

      legend: {
        enabled: true,
        textColor: processColor('blue'),
        textSize: 12,
        position: 'BELOW_CHART_RIGHT',
        form: 'SQUARE',
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        formToTextSpace: 5,
        wordWrapEnabled: true,
        maxSizePercent: 0.5,
        custom: {
          colors: [processColor('red'), processColor('blue')],
          labels: ['Konsumtion', 'Produktion']
        }
      },
      marker: {
        enabled: true,
        backgroundTint: processColor('teal'),
	      markerColor: processColor('#F0C0FF8C'),
        textColor: processColor('white'),

      }
    };
  }

  componentDidMount() {
    this.setState(
      reactAddonsUpdate(this.state, {
        data: {
          $set: {
            dataSets: [{
              values: [{y: 1}, {y: 2}, {y: 3}, {y: 4}],
              label: 'Company X',
              config: {
                  //drawValues: false,
                  //valueTextSize: 20,
                lineWidth: 2,
                drawCircles: false,
                highlightColor: processColor('red'),
                color: processColor('red'),
                drawFilled: true,
                fillColor: processColor('red'),
                fillAlpha: 60,
                valueTextSize: 15,
                valueFormatter: "##.000",
              }
            }, {
              values: [{y: 11}, {y: 12}, {y: 13}, {y: 14}],
              label: 'Company Y',
              config: {
                lineWidth: 1,
                drawCubicIntensity: 0.4,
                circleRadius: 5,
                drawHighlightIndicators: false,
                color: processColor('blue'),
                drawFilled: true,
                fillColor: processColor('blue'),
                fillAlpha: 45,
                  valueTextSize: 15,
                  circleColor: processColor('blue'),
              }
            }],
          }
        },
        //Sett top axis name/marks
        xAxis: {
          $set: {
            valueFormatter: ['Q1', '', 'Q3']
          }
        }
      })
    );
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

        <View style={{height:80}}>
          <Text> Skriva här?</Text>
          <Text> {this.state.selectedEntry}</Text>
        </View>

        <View style={styles.container}>
          <LineChart
            style={styles.chart}
            data={this.state.data}
            description={{text: ''}}
            legend={this.state.legend}
            marker={this.state.marker}
            xAxis={this.state.xAxis}
            drawGridBackground={false}
            borderColor={processColor('teal')}
            borderWidth={1}
            drawBorders={true}

            touchEnabled={true}
            dragEnabled={true}
            scaleEnabled={true}
            scaleXEnabled={true}
            scaleYEnabled={true}
            pinchZoom={true}
            doubleTapToZoomEnabled={true}

            dragDecelerationEnabled={true}
            dragDecelerationFrictionCoef={0.99}

            keepPositionOnRotation={false}
            onSelect={this.handleSelect.bind(this)}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  chart: {
    flex: 1
  }
});

module.exports = LineChartScreen;