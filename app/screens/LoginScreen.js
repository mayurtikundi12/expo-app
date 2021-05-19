import React, { useContext } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppTextInput from '../components/AppTextInput';
import AppColours from '../config/AppColours';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import User from '../context/userContext';


const schema = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).max(8).label("Password"),
    }
);



function LoginScreen({navigation}) {
    const {dispatch} = useContext(User);
    async function login(email, password, navigation) {
    let rawUserInfo = await AsyncStorage.getItem("userInfo")
    let userInfo = JSON.parse(rawUserInfo)
    if (userInfo.email == email && userInfo.password == password) {
        dispatch({userName:userInfo.userName, email:userInfo.email})
        navigation.navigate("Home")
    }
    console.log("This is userInfo: ", typeof userInfo)

    console.log("This is userInfo: ", userInfo)

} 
return (
        <View style={styles.container}>
            <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                    name="airplane-takeoff"
                    size={60}
                    color={AppColours.darkG}/>
            </View>
            <Formik
                initialValues={{email:'', password:'',}}

                onSubmit = {values => {console.log(values)
                login(values.email, values["password"], navigation)
                }}

                validationSchema={schema}
                >
            {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                <>
                <View style={styles.textInpitContainer}>
                <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email-check"
                placeholder="Email Address" 
                keyboardType="email-address"
                textContentType="emailAddress"
                onBlur = {() => setFieldTouched("email")}
                onChangeText = {handleChange("email")}                
                />
                {touched.email &&
                <AppText style={{color:"red", fontSize:15}}>
                    {errors.email}
                </AppText>}
                <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock-check"
                placeholder="Password" 
                textContentType="password"
                secureTextEntry
                onBlur = {() => setFieldTouched("password")}
                onChangeText = {handleChange("password")}
                />
                {touched.password &&
                <AppText style={{color:"red", fontSize:15}}>
                    {errors.password}
                </AppText>}
            </View>
            <AppButton title="Login" onPress = {handleSubmit}/>
            </>
            )}
            </Formik>
        </View>
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