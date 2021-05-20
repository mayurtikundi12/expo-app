import React, {useContext, useState} from "react";
import { View, StyleSheet, Image, Button,ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppCard from "../components/AppCard";
import AppColours from "../config/AppColours";
import AppListItem from "../components/AppListItem";
import AppText from "../components/AppText";
import User from "../context/userContext";
import AppPicker from "../components/AppPicker";
import AppIcon from "../components/AppIcon";
// import {Picker} from '@react-native-picker/picker';
// import Swipeable from 'react-native-gesture-handler';

function AccountScreen(props) {
  const {userInfo} = useContext(User);

  const categorySchema =[
    {label: "Tourist spots", value: 1, icon:"flash", backgroundColor: 'red'},
    {label: "Resorts", value: 2, icon:"flash", backgroundColor: 'red'},
    {label: "Shop", value: 3, icon:"flash", backgroundColor: 'red'},
    {label: "Things to do", value: 4, icon:"flash", backgroundColor: 'red'},
  ];

  const placesList =[
    {title: "Bora Bora", 
    subtitle: "Visited on 4th June 2019", 
    image:  require("../../assets/bora-bora.jpg")},
    {title: "Switzerland",
    subtitle: "Visted on 8th March 2018",
    image: require("../../assets/switz.jpg")},
  ];
  const [places, setPlaces] = useState(placesList);
  const [categories, setCategories] = useState(categorySchema);

  function deletePrev(title){
    let newPlaces = places.filter((item)=>item.title==title ? false : item)
    setPlaces(newPlaces)
  }


  return (
    <ScrollView  pagingEnabled={true} >
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.welcomeContainer}>
          <MaterialCommunityIcons
            name="airplane-takeoff"
            size={60}
            color={AppColours.darkG}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require("../../assets/doge.jpg")}
            style={{
              height: 75,
              width: 75,
              borderRadius: 17,
              zIndex: 10,
            }}
          />
          <AppListItem title={userInfo.userName} subtitle={userInfo.email} />
        </View>
      </View>
      <View>
        <AppPicker data={categories} icon="apps" placeholder="Categories"/>
        {/* <Picker
            selectedValue={categories[0].label}
            onValueChange={(item, itemIndex) =>
              setSelectedLanguage(item.value)
            }>
              {
                categories.map((item)=>{
                  <Picker.Item label={item.label} value={item.value} />
                })
              }
        </Picker> */}
      </View>
      <View style={styles.placesContainer}>
        <AppText style={styles.apptext}>Places you've visited in the past </AppText>
          {places.map((item,key)=>{
                return(
                <View key={key}>
                <AppCard style={styles.card}
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}     
                />
                <Button testID={"TID"+(8+key)} title="delete" onPress={()=>{deletePrev(item.title)}}></Button>
                </View>
                )
                
              })}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  wrap: {
    backgroundColor: AppColours.lightG,
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  profileContainer: {
    flexDirection: "row",
    padding: 30,
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
  },
  placesContainer: {
    backgroundColor: AppColours.white,    
  },
  apptext: {
    fontSize: 25,
    fontFamily: "Roboto",
    alignItems: 'center',
    fontWeight: 'bold',
  },
  deleteView:{
    justifyContent:"center",
    alignItems: "center",
    height: 75,
    backgroundColor: 'brown',
  },  
});

export default AccountScreen;