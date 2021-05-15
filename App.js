import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import { StyleSheet } from 'react-native';
import TravelScreen from './app/screens/TravelScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import AppSwitch from './app/components/AppSwitch';
import AccountScreen from './app/screens/AccountScreen';


export default function App() {
  return ( 
    <AccountScreen>
        {/* <AuthNavigator/> */}
    </AccountScreen>
  );
}

const styles = StyleSheet.create({
  
})
