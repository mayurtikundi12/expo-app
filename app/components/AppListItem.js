import React from 'react';
import { View, StyleSheet, Image, Text  } from 'react-native';

function AppListItem({image, title, subtitle}) {
    return (
        <View>
            <Image source={image} style={StyleSheet.image}/>
            <Text>
                {title}
            </Text>
            <Text>
                {subtitle}
            </Text>            
        </View>
    );
}
const styles = StyleSheet.create({
    image:{
        height:75,
        width:75,
    }
})

export default AppListItem;