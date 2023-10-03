import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../components/LoginForm";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.logIn}
      onPress={() => navigation.navigate("Welcome")}
    >
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back1.png")}
      />
      <View style={[styles.frame, styles.logoFlexBox]}>
        <View style={[styles.logo, styles.logoFlexBox]}>
          <Image
            style={styles.psychiatry2Icon}
            contentFit="cover"
            source={require("../assets/psychiatry-22.png")}
          />
          <Text style={styles.treense}>TREENSE</Text>
        </View>
        <LoginForm />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  logoFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  backIcon: {
    width: 10,
    height: 16,
  },
  psychiatry2Icon: {
    width: 195,
    height: 214,
    overflow: "hidden",
  },
  treense: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.holtwoodOneSC,
    color: Color.colorBlack,
    textAlign: "left",
    width: 140,
    height: 55,
  },
  logo: {
    alignSelf: "stretch",
    height: 258,
  },
  frame: {
    width: 299,
    justifyContent: "center",
    marginLeft: 34,
  },
  logIn: {
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    width: "100%",
    height: 840,
    flexDirection: "row",
    padding: 20,
    overflow: "hidden",
  },
});

export default LogIn;
