import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppColours from '../config/AppColours';
import MaterialCommunityIcons from '@expo/vector-icons';

import AppTextInput from '../components/AppTextInput';

import AppScreen from '../components/AppScreen';
import AppButton from '../components/AppButton';

function LoginScreen(props) {
    return (
        <AppScreen style={styles.container}>
            <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                    name="airplane-takeoff"
                    size={60}
                    color={AppColours.lightG}/>
            </View>
            <View style={styles.textInpitContainer}>
                <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                placeholder="Email Address" 
                keyboardType="email-address"
                textContentType="emailAddress"
                />
                <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password" 
                textContentType="password"
                secureTextEntry
                />
            </View>
            <AppButton title="Login"/>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: AppColours.lightG,
    },
    welcomeContainer:{
        backgroundColor: AppColours.lightG,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
    },
    textInputContainer:{

    }
})
export default LoginScreen;