import React, { useState } from 'react';
import { View, StyleSheet, Modal, Button, TouchableWithoutFeedback, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColours from '../config/AppColours';
import AppSelectItem from './AppSelectItem';
import AppText from './AppText';



function AppSelect({data, icon, placeholder, numColumns, selectedItem, onSelectItem}) {

    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={24}/>}
                    <AppText style={styles.text}> {selectedItem? selectedItem.label : placeholder} </AppText>
                    <MaterialCommunityIcons name="map-marker" size={24}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <View>
                    <Button title="Close" onPress={() => setModalVisible(false)}/>
                    <FlatList
                        numColumns={numColumns}
                        data={data}
                        keyExtractor={item => item.value.toString()}
                        renderItem = {({item}) => 
                        <AppSelectItem
                            onPress={()=> {
                                setModalVisible(false);
                                onSelectItem(item);
                                    }
                                }
                            label={item.label}
                            icon={item.icon}
                            backgroundColor={item.backgroundColor}
                            />}
                    />
                </View> 
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    
    container:{
        backgroundColor: AppColours.lightG,
        flexDirection: 'row',
        borderRadius: 25, 
        padding: 10,
        marginVertical: 20,
        width:'100%',
    },
    text:{
        flex:1,
        color: AppColours.white,
    },
})

export default AppSelect;