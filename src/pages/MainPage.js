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
    Dimensions,
    TouchableOpacity,
    ScrollView,
    TextInput,
} = ReactNative;

const timing = 10000;
var {height, width} = Dimensions.get('window');

var BarK = require('../graphs/barMainK');
var Bar = require('../graphs/Bar');
import styles from '../components/Styles';


class MainPage extends Component {

    constructor () {
        super()
        this.spinValue = new Animated.Value(0);
        this.spinValue2 = new Animated.Value(0);
        this.state = {showText: true};
    }



    componentDidMount () {
        this.spin();
        this.spin2();
    }


    spin () {
        this.spinValue.setValue(0) //Här ändras värdet på hur snabbt solen ska snurra
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: timing,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }

    spin2 () {
        this.spinValue2.setValue(0) //Här ändras värdet på hur snabbt kugghjulet ska snurra
        Animated.timing(
            this.spinValue2,
            {
                toValue: 1,
                duration: timing,
                easing: Easing.linear

            }
        ).start(() => this.spin2())


    }

    render() {
        /* This also works, to show functions instead of strings */
        // const getStartValue = () => '0deg'
        // const getEndValue = () => '360deg'
        // const spin = this.spinValue.interpolate({
        //   inputRange: [0, 1],
        //   outputRange: [getStartValue(), getEndValue()]
        // })
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        const spin2 = this.spinValue2.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        let pic = {
            uri: 'http://watt-s.com/wp-content/themes/watt-s/assets/img/watts_logo.png'
        };

        return (
            <View style={styles.container}>
                <View style={styles.content}>

                    <View style={styles.graph}>
                        <Text style={styles.topLeft}>
                            I år
                        </Text>
                        <Bar/>

                    </View>


                    <View style={styles.graph}>

                        <Text style={styles.topLeft}>
                            Just nu
                        </Text>


                        <View style={styles.usage}>

                            <View style={styles.solarspin}>
                                <Animated.Image
                                    style={{ width: 70, height: 70, transform: [{rotate: spin}] }}
                                    source={require('../icon/solen.png')}/>

                                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                                    4W
                                </Text>

                            </View>



                        <View style={styles.consumptionspin}>
                            <Animated.Image
                                style={{ width: 70, height: 70, transform: [{rotate: spin2}] }}
                                source={require('../icon/kugg.png')}/>

                            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                                3W
                            </Text>

                        </View>

                    </View>

                    </View>

                    {/* TODO supp for 16:9 supp*/}
                    <View style={{alignItems: 'center'}}>
                         <Image source={pic} style = {{width: 0.5*width, height: 0.25*width}}></Image>
                    </View>

                </View>


            </View>
        );
    }
};

module.exports = MainPage;

/*     <Animated.Image
 style={{ width: 70, height: 70, transform: [{rotate: spin}] }}
 source={require('./sun2.png')}/>

 <Animated.Image
 style={{ width: 70, height: 70, transform: [{rotate: spin2}] }}
 source={require('./kugg.png')}/> */