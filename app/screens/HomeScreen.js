import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TravelScreen from './TravelScreen';
import AccountScreen from './AccountScreen';


const Tab = createBottomTabNavigator();
function HomeScreen(props) {

    return (
                <Tab.Navigator>
                <Tab.Screen name="Travel" component={TravelScreen} />
                <Tab.Screen name="Account" component={AccountScreen}/>
                </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    
})

export default HomeScreen;