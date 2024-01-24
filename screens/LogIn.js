import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../components/LoginForm";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logIn}>
      <View style={styles.logIn2}>
        <Pressable style={styles.backIcon1} onPress={() => navigation.navigate("Welcome")}>
          <Image
          style={styles.backIcon2}
          contentFit="cover"
          source={require("../assets/back1.png")}
          />
        </Pressable>
        
        <View style={[styles.frame, styles.logoFlexBox]}>
          <View style={[styles.logo, styles.logoFlexBox]}>
            <Image
              style={styles.Icon}
              contentFit="cover"
              source={require("../assets/logo4.png")}
            />
            <Text style={styles.treense}>TREENSE</Text>
          </View> 
        </View>
        <LoginForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoFlexBox: {
    alignItems: "center",
    overflow: "hidden",
    height: 270,
  },
  backIcon1: {
    marginLeft: 20,
    marginTop: 75,
    width: "100%",
    height: 20,
  },
  backIcon2: {
    width: 15,
    height: 20,
  },
  Icon: {
    width: 290,
    height: 214,
    overflow: "hidden",
  },
  treense: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.holtwoodOneSC,
    color: Color.colorBlack,
    left: 7,
    textAlign: "left",
    width: 140,
    height: 55,
  },
  logo: {
    alignSelf: "stretch",
    height: 270,
  
  },
  frame: {
    width: 300,
    justifyContent: "center",
    marginLeft: 17,
  },
  logIn: {
    backgroundColor: "#8fd296",
    flex: 1,
    width: "100%",
    height: 840,
    flexDirection: "row",
    padding: 15,
    overflow: "hidden",
  },
  logIn2: {
    backgroundColor: "#8fd296",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default LogIn;
