import React from 'react';
import { SafeAreaView, StyleSheet, Image, View, Button} from 'react-native';
// const blurRadiusValue = Platform.OS === 'android'? 0.7 : 5.5;
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';


import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import AppColours from '../config/AppColours';

function WelcomeScreen({navigation}) {
    return (
        <SafeAreaView>
            {/* <ImageBackground
                source={require("./travelBG.jpg")}
                style={styles.backgroung} 
                blurRadius={blurRadiusValue}> */}
                    <View style={styles.welcomeScreen}>
                        <MaterialCommunityIcons
                            name="airplane-takeoff"
                            size={50}
                            color= {AppColours.black}/>
                        <AppText> Welcome to TravApp </AppText>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button testID = "TID1" title="Login" onPress={ () => navigation.navigate("Login")}>Login</Button>
                        {/* <AppButton testID = "TID1" title="Login" onPress={ () => navigation.navigate("Login")}/> */}
                        <Button testID = "TID2" title="Sign Up" onPress={ () => navigation.navigate("Register")}/>                        
                    
                    </View>
            {/* </ImageBackground> */}
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
    },
    welcomeScreen:{
        backgroundColor: AppColours.lightG,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
    },
    buttonContainer:{    
        backgroundColor: AppColours.darkG,
        marginTop: 100,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 200,
        alignItems: 'center',
        padding: 20,

    },
})
export default WelcomeScreen;