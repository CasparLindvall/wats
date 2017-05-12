/**
 * Created by Caspar on 2017-05-10.
 */
import React, { Component } from 'react';
import { AppRegistry, Text, View,StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import MainPage from './MainPage';
import Overblick from './Second';
//import Detalj from './Detalj';
var Detalj = require('./Detalj');

export default class Tabs extends Component {
    state = {
        index: 0,
        routes: [
            { key: '1', title: 'Main' },
            { key: '2', title: 'Överblick' },
            { key: '3', title: 'Detaljvy'}
        ],
    };

    _handleChangeTab = (index) => {
        this.setState({ index });
    };

    _renderHeader = (props) => {
        return <TabBar {...props} />;
    };

    _renderScene = ({ route }) => {
        switch (route.key) {
            case '1':
                return <MainPage/>
            case '2':
                return <Overblick/>;
            case '3':
                return <Detalj/>;
                break;
            default:
                return null;
        }
    };

    render() {
        let pic = {
            uri: 'http://watt-s.com/wp-content/themes/watt-s/assets/img/watts_logo.png'
        };
        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onRequestChangeTab={this._handleChangeTab}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

module.exports = Tabs;
