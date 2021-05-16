import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppCard from '../components/AppCard';
import AppColours from '../config/AppColours';
import AppSelect from '../components/AppSelect';
import AppText from '../components/AppText';


function TravelScreen(props) {
    return (
        <View style={styles.container}>
            <AppText style={styles.apptext}>
                Select your travel destination!
            </AppText>
            <AppCard style={styles.card}
                title="Bora Bora"
                subtitle="Undoubtedly the most celebrated island in the South Pacific, Bora Bora is French Polynesia's leading lady. "
                image={require("../../assets/bora-bora.jpg")}
            />
            <AppCard style={styles.card}
                title="Switzerland"
                subtitle="Switzerland, officially the Swiss Confederation, is a landlocked country situated at the confluence of Western, Central, and Southern Europe."
                image={require("../../assets/switz.jpg")}
            />
            <AppCard style={styles.card}
                title="Mykonos"
                subtitle="Mykonos is a Greek island, part of the Cyclades, lying between Tinos, Syros, Paros and Naxos."
                image={require("../../assets/myk.jpg")}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: AppColours.darkG,
    },
    card:{
        zIndex:5,
        padding: 10,
        marginTop: 10,
    },  
    apptext: {
        fontSize: 25,
        fontFamily: "Roboto",
        alignItems: 'center',
        fontWeight: 'bold',
        padding: 10,
        color: AppColours.white,
    },
})

export default TravelScreen;