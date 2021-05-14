import React, {useState} from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppTextInput from '../components/AppTextInput';
import AppColours from '../config/AppColours';
import AppScreen from '../components/AppScreen';
import AppButton from '../components/AppButton';


function LoginScreen(props) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <AppScreen style={styles.container}>
            <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                    name="airplane-takeoff"
                    size={60}
                    color={AppColours.darkG}/>
            </View>
            <View style={styles.textInpitContainer}>
                <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email-check"
                placeholder="Email Address" 
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText = { userInputEmail => setEmail(userInputEmail)}
                />
                <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock-check"
                placeholder="Password" 
                textContentType="password"
                secureTextEntry
                onChangeText = { userInputPassword => setEmail(userInputPassword)}
                />
            </View>
            <AppButton title="Login" onPress = {() => console.log(email, password)}/>
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