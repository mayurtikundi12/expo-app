import React from 'react';
import { View, StyleSheet, Image, Text  } from 'react-native';

function AppListItem({image, title, subtitle}) {
    return (
        <View>
            <Image source={require("../../assets/doge.jpg")} style={{
        height: 75,
        width:75,
        borderRadius: 17,
        zIndex: 10,

    }}/>
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
        height: 75,
        width:75,
        borderRadius: 17,

    }
})

export default AppListItem;