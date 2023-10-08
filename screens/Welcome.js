import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { useNavigation, StackNavigationProp } from "@react-navigation/native";
import { ParamListBase } from "@react-navigation/routers";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.welcome, styles.logoFlexBox]}>
      <View style={[styles.logo, styles.logoFlexBox]}>
        <Image
          style={styles.psychiatry2Icon}
          contentFit="cover"
          source={require("../assets/psychiatry-2.png")}
        />
        <Text style={styles.treense}>TREENSE</Text>
      </View>
      <Pressable style={styles.frame}>
        <TouchableHighlight
          style={[styles.login, styles.loginFlexBox1]}
          underlayColor="#f5efef"
          onPress={() => navigation.navigate("LogIn")}
        >
          <Pressable onPress={() => navigation.navigate("LogIn")}>
            <Text style={[styles.login2, styles.textTypo]}>LOGIN</Text>
          </Pressable>
        </TouchableHighlight>
        <Text style={[styles.text, styles.textTypo]}>|</Text>
        <TouchableHighlight
          style={styles.loginFlexBox2}
          underlayColor="#f5efef"
          onPress={() => navigation.navigate("Registeration")}
        >
          <Pressable onPress={() => navigation.navigate("Registeration")}>
            <Text style={styles.signUp2}>SIGN-UP</Text>
          </Pressable>
        </TouchableHighlight>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logoFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  loginFlexBox1: {
    width: 71,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  loginFlexBox2: {
    width: 71,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  textTypo: {
    height: 17,
    fontFamily: FontFamily.interBold,
    fontWeight: "100",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
  },
  psychiatry2Icon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    height: 287,
    overflow: "hidden",
    width: "100%",
  },
  treense: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.holtwoodOneSC,
    width: 140,
    height: 55,
    textAlign: "left",
    color: Color.colorBlack,
  },
  logo: {
    width: 255,
  },
  login2: {
    marginLeft: 10,
    width: 53,
    height: 17,
    
  },
  login: {
    height: 23,
    
  },
  text: {
    width: 6,
  },
  signUp2: {
    width: 67,
    height: 18,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
  },
  frame: {
    width: 189,
    marginTop: 131,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  welcome: {
    backgroundColor: "#8fd296",
    flex: 1,
    height: 840,
    paddingLeft: 87,
    paddingTop: Padding.p_161xl,
    paddingRight: 88,
    paddingBottom: Padding.p_161xl,
    width: "100%",
    alignItems: "center",
  },
});

export default Welcome;
