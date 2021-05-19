import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TravelScreen from './TravelScreen';
import AccountScreen from './AccountScreen';
import ResortScreen from './ResortScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
function HomeScreen(props) {

    return (
        // <NavigationContainer>
                <Tab.Navigator
        //         screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;

        //     if (route.name === 'Travel') {
        //       iconName = focused
        //         ? 'ios-information-circle'
        //         : 'ios-information-circle-outline';
        //     } else if (route.name === 'Account') {
        //       iconName = focused ? 'ios-list-box' : 'ios-list';
        //     } else if (route.name === 'Resorts') {
        //         iconName = focused ? 'ios-list-box' : 'ios-list';

        //     // You can return any component that you like here!
        //     return <Ionicons name={iconName} size={size} color={color} />;
        //   },
        // }})
        // tabBarOptions={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'gray',
        // }}
        >
                    <Tab.Screen  
                    name="Travel" 
                    component={TravelScreen} />
                    <Tab.Screen 
                    name="Resorts" 
                    component={ResortScreen}/>
                    <Tab.Screen 
                    name="Account" 
                    component={AccountScreen}/>

                    
                </Tab.Navigator>
        // {/* </NavigationContainer> */}
    )};


const styles = StyleSheet.create({
    
})


export default HomeScreen;