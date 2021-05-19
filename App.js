import React,{useReducer} from 'react';
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
import HomeScreen from './app/screens/HomeScreen';
import User from './app/context/userContext';


let initialUser = {userName:"", email:""}

export default function App() {
  const AppStack = createStackNavigator();

  const userInfoReducer = (prevState, newUserInfo) => {
    console.log("dispath getting called ",newUserInfo)
      // return Object.assign(prevState,{userName:newUserInfo.userName,email:newUserInfo.email});
      return {...prevState,userName:newUserInfo.userName,email:newUserInfo.email};
  };
  const [userInfo, dispatch] = React.useReducer(userInfoReducer, initialUser);


  return (   
    // <HomeScreen/>

    <User.Provider value={{userInfo,dispatch}} >
      <NavigationContainer>
          <AppStack.Navigator initialRouteName="Welcome">
          <AppStack.Screen name="Home" component={HomeScreen} />        

              <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
              <AppStack.Screen name="Login" component={LoginScreen} options={{title: 'Login Screen'}}/>
              <AppStack.Screen name="Register" component={RegisterScreen} options={{title: 'Sign Up for TravApp!'}}/>
          
          </AppStack.Navigator>
      </NavigationContainer>
    </User.Provider>

    
  );
}



