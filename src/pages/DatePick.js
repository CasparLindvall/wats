import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PanResponder
} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class DatePick extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: 'x',
            datetime: '2017-05-12',
        };
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e) => {console.log('onStartShouldSetPanResponder'); return true;},
            onMoveShouldSetPanResponder: (e) => {console.log('onMoveShouldSetPanResponder'); return true;},
            onPanResponderGrant: (e) => console.log('onPanResponderGrant'),
            onPanResponderMove: (e) => console.log('onPanResponderMove'),
            onPanResponderRelease: (e) => console.log('onPanResponderRelease'),
            onPanResponderTerminate: (e) => console.log('onPanResponderTerminate')
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <DatePicker
                    style={{width: 200}}
                    date={this.state.datetime}
                    mode="date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"

                    minDate="2016-01-01"
                    maxDate="2017-05-27"

                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(datetime) => {this.setState({datetime: datetime});}}

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
});