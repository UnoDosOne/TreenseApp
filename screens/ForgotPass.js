import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ForgotPasswordContainer from "../components/ForgotPasswordContainer";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ForgotPass = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.forgotPass}
      onPress={() => navigation.navigate("LogIn")}
    >
      <ForgotPasswordContainer />
      <Image
        style={[styles.backIcon, styles.logoPosition]}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <View style={[styles.logo, styles.logoPosition]}>
        <Image
          style={styles.psychiatry2Icon}
          contentFit="cover"
          source={require("../assets/psychiatry-21.png")}
        />
        <Text style={styles.treense}>TREENSE</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  logoPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  backIcon: {
    height: "1.68%",
    width: "2.35%",
    top: "2.15%",
    right: "93%",
    bottom: "96.18%",
    left: "4.65%",
    maxWidth: "100%",
    maxHeight: "100%",
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
    top: 52,
    left: 88,
    width: 255,
    height: 258,
    alignItems: "center",
  },
  forgotPass: {
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    width: "100%",
    height: 840,
    overflow: "hidden",
  },
});

export default ForgotPass;
