import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import App from '../../App';
import AppColours from '../config/AppColours';


function AppButton({title, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.text}> {title} </Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: AppColours.darkG,        
        borderRadius: 20,
        width: '100%',
        padding: 15,
    },
    text: {
        color: AppColours.white,
        fontSize: 20,
        TextTransform: 'uppercase',
        fontWeight: 'bold',
    }
})
export default AppButton;