import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import { View,StyleSheet } from 'react-native';
import TravelScreen from './app/screens/TravelScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import AppSwitch from './app/components/AppSwitch';
import AccountScreen from './app/screens/AccountScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AppCard from './app/components/AppCard';

export default function App() {
  const AppStack = createStackNavigator();
  return (   

    <AccountScreen/>

    // <NavigationContainer>
    // <AppStack.Navigator initialRouteName="Welcome">
    //     <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
    //     <AppStack.Screen name="Login" component={LoginScreen} options={{title: 'Login Screen'}}/>
    //     <AppStack.Screen name="Register" component={RegisterScreen} options={{title: 'Sign Up for TravApp!'}}/>
    //     <AppStack.Screen name="travel" component={TravelScreen} />
    //     <AppStack.Screen name="Account" component={AccountScreen}/>

    // </AppStack.Navigator>
    // </NavigationContainer>
  );
}

