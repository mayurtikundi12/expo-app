import React ,{useState, useEffect}from 'react';
import { ScrollView, StyleSheet, View ,Button} from 'react-native';
import AppCard from '../components/AppCard';
import AppColours from '../config/AppColours';
import AppText from '../components/AppText';


function TravelScreen(props) {
    let placeList = [{
        title:"Bora Bora",
        subtitle:"Undoubtedly the most celebrated island in the South Pacific, Bora Bora is French Polynesia's leading lady. ",
        image:require("../../assets/bora-bora.jpg")
    },
    {                   
    title:"Switzerland",
    subtitle:"Switzerland, officially the Swiss Confederation, is a landlocked country situated at the confluence of Western, Central, and Southern Europe.",
    image:require("../../assets/switz.jpg")
    },
    {
    title:"Mykonos",
    subtitle:"Mykonos is a Greek island, part of the Cyclades, lying between Tinos, Syros, Paros and Naxos.",
    image:require("../../assets/myk.jpg")
    }
];

    let extraPlaces = [{     
        title:"Taj Mahal",
        subtitle:"One of the 7 Wonder's of the world",
        image:require("../../assets/bora-bora.jpg")
}]
    function showMore(){

        if(extraPlaces.length > 0){
        let newPlace = extraPlaces.pop();
        setPlaces([...places,newPlace]);
    }
    }
    let [places,setPlaces] = useState(placeList);
    useEffect(()=>{

    },[places])
    return (
        <ScrollView pagingEnabled={true} >
        <View style={styles.container}>
          
            <AppText style={styles.apptext}>
                Select your travel destination!
            </AppText>
            {
                places.map((item,index)=>{
                  return  <AppCard  key={index} testId="placeCard" style={styles.card}
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                />
                })
            }
        </View>
        <Button testID="showMore" title="Show More Places" onPress={showMore} >
        </Button>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: AppColours.darkG,
    },
    card:{
        zIndex:5,
        padding: 10,
        marginTop: 10,
    },  
    apptext: {
        fontSize: 25,
        fontFamily: "Roboto",
        alignItems: 'center',
        fontWeight: 'bold',
        padding: 10,
        color: AppColours.white,
    },
})

export default TravelScreen;