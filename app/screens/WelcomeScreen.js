import React from 'react';
import { SafeAreaView, StyleSheet, Image, View, Button, ImageBackground, Platform} from 'react-native';
const blurRadiusValue = Platform.OS === 'android'? 0.7 : 5.5;
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';


import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import AppColours from '../config/AppColours';

function WelcomeScreen({navigation}) {
    return (
        <View>
            <View style={styles.welcomeScreen}>
                <MaterialCommunityIcons
                    name="airplane-takeoff"
                    size={50}
                    color= {AppColours.black}/>
                <AppText> Welcome to TravApp </AppText>
            </View>
            <View style={styles.buttonContainer}>
                <Button testID = "TID1" title="Login" onPress={ () => navigation.navigate("Login")}>Login</Button>
                <Button testID = "TID2" title="Sign Up" onPress={ () => navigation.navigate("Register")}> Sign Up </Button>                        
            </View>
            {/* </ImageBackground> */}
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        height: '100%',
        width: '100%',
        zIndex: 1,
    },
    welcomeScreen:{
        backgroundColor: AppColours.lightG,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
    },
    buttonContainer:{    
        justifyContent: 'space-between',
        marginTop: 100,
        flexDirection: 'column',
        height: 200,
        alignItems: 'stretch',
        padding: 20,
        width: '100%',

    },
})
export default WelcomeScreen;