import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TravelScreen from '../screens/TravelScreen';
import AccountScreen from '../screens/AccountScreen';


const AppStack = createStackNavigator();

const AuthNavigator = () => {
    <AppStack.Navigator>
        <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Login" component={LoginScreen} options={{title: 'Login Screen'}}/>
        <AppStack.Screen name="Register" component={RegisterScreen} options={{title: 'Sign Up for TravApp!'}}/>
        <AppStack.Screen name="travel" component={TravelScreen} />
        <AppStack.Screen name="Account" component={AccountScreen}/>
    </AppStack.Navigator>
}

export default AuthNavigator;