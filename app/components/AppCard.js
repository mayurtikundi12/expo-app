import { View, Image, StyleSheet } from 'react-native';

import React from 'react';
import AppColours from '../config/AppColours';
import AppText from './AppText';

function AppCard({title, subtitle, image}) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>
            <AppText style={styles.title}> {title} </AppText>
            <AppText style={styles.subtitle}> {subtitle} </AppText>

        </View>
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
        color: AppColours.white,
    },
    subtitle: {
        color: AppColours.white,
    },
})

export default AppCard;