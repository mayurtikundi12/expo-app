import React, { useState } from 'react';

import AppSelect from '../components/AppSelect';
import AppScreen from '../components/AppScreen';
import AppColours from '../config/AppColours';
const categories = [
    {label: "Bali", value:1, backgroundColor:"red"},
    {label: "Bora-Bora", value:2, backgroundColor:"blue"},
    {label: "India", value:3, backgroundColor:"green"},
];


function TravelScreen(props) {
    const[places, setPlaces] = useState();

    return (
        <AppScreen style={{backgroundColor:AppColours.white}}>
            <AppSelect
                selectedItem={category}
                onSelectItem = {item => setPlaces(item)}
                data={categories} 
                icon="apps" 
                placeholder="Locations" 
                numColumns={3}/>
        </AppScreen>
    );
}

export default TravelScreen;