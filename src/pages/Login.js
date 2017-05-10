/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';



import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  AppRegistry,
  Dimensions,
  Easing
} from 'react-native';
 


export default class Login extends Component {
   constructor(props, context) {
    super(props, context);
  }
  _handlePressLogin() {
    console.log('Pressed!');
    this.props.navigator.replace({
      id: 'Tabs',
       });
  }
  _handlePressCancel() {
    console.log('Pressed!');
    this.props.navigator.replace({
      id: 'Login',
       });
  }

  render() {
    let pic = {
      uri: 'http://watt-s.com/wp-content/themes/watt-s/assets/img/watts_logo.png'
    };
    return (

        <View style={styles.main}>  
        <View style={{alignItems: 'center'}}>
      <Image source={pic} style={{width: 200, height: 110}}/>
      </View>

         <Container>
       <Label text="Email" />
    <TextInput
        style={styles.textInput}/>
        </Container>
        <Container>
        <Label text="Lösenord" />
        <TextInput
        secureTextEntry={true}
        style={styles.textInput}/>
        </Container>

    <Container>
       <Button 
        label="Glömt Lösenord"
        styles={{button: styles.alignRight, label: styles.label}} 
        onPress={() => this._handlePressCancel()} />
       </Container>
       

<View style={styles.footer}>
    <Container>
        <Button 
            label="Logga in"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
          onPress={() => this._handlePressLogin()} />
    </Container>
    
</View>
      


        </View>
      
    );
  }
}




const styles = StyleSheet.create({
  
 scroll: {                         // Style till scroll view
    backgroundColor: 'seashell',
    padding: 30,
    flexDirection: 'column'
    //flex: 1;
},
  /*watts_logo:{
 flex:1,
    backgroundColor:'yellow',
  },*/
main: {
  backgroundColor: 'seashell',
  padding: 50,
},

label: {
    color: '#0d8898',
    fontSize: 20
},
alignRight: {
   alignSelf: 'flex-end'
}, 

textInput: {
    height: 80,
    fontSize: 30,
    backgroundColor: 'white'
},

buttonWhiteText: {
    fontSize: 20,
    color: 'white',
},
buttonBlackText: {
    fontSize: 20,
    color: '#595856'
},
primaryButton: {
    backgroundColor: '#34A853'
},
footer: {
   marginTop: 30
}

});


module.exports = Login;