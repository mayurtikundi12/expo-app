import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppColours from '../config/AppColours';


function CardScreen(props) {
    return (
        <AppScreen style={styles.container}>
            
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container:{
        padding:20,
        flex:1,
        backgroundColor:AppColours.lightG,
    },
})

export default CardScreen;