import React, {useContext} from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppCard from "../components/AppCard";
import AppColours from "../config/AppColours";
import AppListItem from "../components/AppListItem";
import AppText from "../components/AppText";
import User from "../context/userContext";


function AccountScreen(props) {
  const {userInfo} = useContext(User);


  return (
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
      <View style={styles.placesContainer}>
        <AppText style={styles.apptext}>Places you've visited in the past</AppText>
        
            <AppCard style={styles.card}
                title="Bora Bora"
                subtitle="Visited on 4th June 2019"
                image={require("../../assets/bora-bora.jpg")}
            />
            <AppCard style={styles.card}
                title="Switzerland"
                subtitle="Visted on 8th March 2018"
                image={require("../../assets/switz.jpg")}
            />
      </View>
    </View>
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
});

export default AccountScreen;
