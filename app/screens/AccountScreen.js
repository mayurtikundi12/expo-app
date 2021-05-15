import React from 'react';
import { View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColours from '../config/AppColours';
import AppListItem from '../components/AppListItem';

function AccountScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.welcomeContainer}>
                <MaterialCommunityIcons
                    name="airplane-takeoff"
                    size={60}
                    color={AppColours.darkG}/>
            </View>
            <View style={styles.profileContainer}>
             

                <AppListItem 
                
                title="BillieEilish" 
                subtitle="be@gmail.com"/>

            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:AppColours.lightG,
    },
    welcomeContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    }, 
    profileContainer:{
        marginVertical:50,

    }
})

export default AccountScreen;