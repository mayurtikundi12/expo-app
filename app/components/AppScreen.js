import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';



function AppScreen({children}) {
    return (
        <SafeAreaView>
            {children}
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