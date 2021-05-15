import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import {MaterialCommunityIcons} from '@expo/vector-icons';

// import AppScreen from '../components/AppScreen';
import AppColours from '../config/AppColours';
import AppListItem from '../components/AppListItem';

function AppScreen({children}) {
    return (
        <SafeAreaView>
            <View style={styles.welcomeContainer}>
                <MaterialCommunityIcons
                    name="airplane-takeoff"
                    size={60}
                    color={AppColours.darkG}/>
            </View>
            <View style={styles.profileContainer}>
                <AppListItem 
                image={require("../../assets/doge.jpg")} 
                title="BillieEilish" 
                subtitle="be@gmail.com"/>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        marginTop: Constants.statusBarHeight,
    }
})

export default AppScreen;