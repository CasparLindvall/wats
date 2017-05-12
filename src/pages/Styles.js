//Module for different styles

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    //from MainPage.js
    container: {
        marginTop: 5,
        flex: 1,
    },

    content: {
        flex:7,
        marginBottom: 0,
    },

    mainPageLogo:{
        flex:2,
        elevation: 3,
        padding: 0,
        margin: 5,
        backgroundColor:'white',

    },

    graph:{
        flex:3,
        elevation: 3,
        padding: 0,
        margin: 5,
        backgroundColor: 'white'
    },

    usage:{
        flex:3,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    solarspin:{
        flex: 1,
        alignItems: 'center',
        paddingLeft: 50
    },

    consumptionspin:{
        flex: 1,
        alignItems: 'center',
        paddingRight: 50
    },

    footer:{
        flex:1,
        backgroundColor:'lightgrey',
        justifyContent: 'center',
        alignItems: 'center'
    },

    topLeft:{
        fontSize: 20,
        fontFamily: 'Lucida Console',
        fontWeight: 'bold',
        color: 'black',

        textShadowColor: 'lightgrey',
        textShadowOffset: {width: 1, height: 1},

        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 10,
    },

    //From Seconds.js
    graphs: {
        flex: 7,
        backgroundColor:'white',
        elevation: 2,
        margin: 5,
    },

    button: {
        flexDirection: 'row',
        flex: 1,

    },


    button1 : {
        flexDirection: 'column',
        flex: 1,
        padding: 2,
    },

    something: {
        flex: 2,

    },

    //From Detalj.js

});