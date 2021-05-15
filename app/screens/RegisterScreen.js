import React, {useState} from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Formik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppButton from '../components/AppButton';
import AppColours from '../config/AppColours';
import AppTextInput from '../components/AppTextInput';
import AccountScreen from './AccountScreen';


async function register(userName, email, password, navigation) {
    let userInfo = {
        userName: userName,
        email: email,
        password: password
    }
    await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo))
    navigation.navigate("Login")
}


function RegisterScreen({navigation}) {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={styles.container}>
                <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="airplane-takeoff" 
                        size={60}
                        color={AppColours.darkG}/>
                </View>
                <View style={styles.textInputContainer}>  
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="account"
                        placeholder="Full Name"
                        textContentType="emailAddress"
                        onChangeText = { userInputName => setUserName(userInputName)}
                        />           
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        placeholder="Email Address"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        onChangeText = { userInputEmail => setEmail(userInputEmail)}
                        />
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                        onChangeText = {userInputPassword => setPassword(userInputPassword)}
                        />
                </View> 
                <AppButton title="Register" onPress={() => {register(userName , email, password, navigation)}}/>
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
    textInputContainer:{
        marginVertical:50,

    }

})

export default RegisterScreen;