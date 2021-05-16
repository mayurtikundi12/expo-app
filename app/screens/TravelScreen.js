import React from 'react';
import { StyleSheet } from 'react-native';

import AppCard from '../components/AppCard';
import AppColours from '../config/AppColours';
import AppSelect from '../components/AppSelect';


function TravelScreen(props) {
    return (
        <View style={styles.container}>
            <AppCard style={styles.card}
                title="Bora Bora"
                subtitle="Visited on 4th June 2019"
                image={require("../../assets/bora-bora.jpg")}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        height: 100,
        width: 100,
    },
    card:{
        zIndex:5,
    },  
})

export default TravelScreen;