import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import React from 'react';

import AppColours from '../config/AppColours';
import AppText from './AppText';

function AppCard({title, subtitle, image}) {
    return (
        // <Swipeable renderRightActions={onSwipeLeft}>
        
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>
            <AppText style={styles.title}> {title} </AppText>
            <AppText style={styles.subtitle}> {subtitle} </AppText>

        </View>
        // </Swipeable>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColours.lightG,
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: 25,
    },
    image: {
        height: 200,
        width: "100%",
    },
    title: {
        fontSize: 20,
        color: AppColours.white,
        fontFamily: "Roboto",
        alignItems: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 15,
        color: AppColours.white,
        fontFamily: "Roboto",
        alignItems: 'center',
    },
})

export default AppCard;