import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import AppText from './AppText';
import AppIcon from './AppIcon';
function AppPickerItem({onPress, label, icon, backgroundColor}) {
    return (
        <TouchableOpacity onPreess={onPress}>
            <AppIcon name={icon} iconColor="white"/>
            <AppText>
                {label}
            </AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
})

export default AppPickerItem;