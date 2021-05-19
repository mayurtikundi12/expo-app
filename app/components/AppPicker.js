import React, {useState} from 'react';
import { View, Button,  StyleSheet, Modal, TouchableWithoutFeedback, FlatList} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColours from '../config/AppColours';
import AppText from './AppText';
import AppPickerItem from './AppPickerItem';


function AppPicker({icon, placeholder, data}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={25}/>}
                    <AppText style={styles.text}> {placeholder} </AppText>
                    {icon && <MaterialCommunityIcons name="chevron-down" size={25}/>}
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={false} animationType="slide">
                <View>
                    <Button title="Close" onPress={() => setModalVisible(false)}/>
                    <FlatList
                    data = {data}
                    keyExtractor={item => item.value.toString()}
                    renderItem = {({item}) => <AppPickerItem
                    onPress={() => console.log(item.label)}
                    label={item.label}
                    icon={item.icon}
                    />}
                    
                    />
                </View>
            </Modal>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColours.lightG,
        flexDirection: 'row',
        borderRadius: 25,
        padding: 10,
        marginVertical: 20,
        width: '100%',
    },
    text: {
        flex: 1,
    },
})

export default AppPicker;