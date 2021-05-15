import React, {useState} from 'react';
import { View, Switch } from 'react-native';

function AppSwitch(props) {
    const [isEnabled, setIsEnabled] = useState();
    return (
        <View style={{flex:1}}>
        <Switch value={isEnabled} on ValueChange={
            (input => setIsEnabled(input))
        }/>

        </View>

    );
}

export default AppSwitch;