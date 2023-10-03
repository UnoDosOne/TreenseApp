import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const UploadImageFormContainer = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.capture}>
      <View style={[styles.captureChild, styles.button1Position]} />
      <Image
        style={[styles.camIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/cam.png")}
      />
      <Image
        style={[styles.photoCamera1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/photo-camera-1.png")}
      />
      <Pressable
        style={[styles.button, styles.buttonShadowBox]}
        onPress={() => navigation.navigate("Classification")}
      >
        <View style={[styles.button1, styles.button1Position]} />
        <Text style={styles.uploadImage}>{`Upload Image `}</Text>
      </Pressable>
      <Pressable
        style={[styles.button2, styles.buttonShadowBox]}
        onPress={() => navigation.navigate("Classification")}
      >
        <View style={[styles.button1, styles.button1Position]} />
        <Text style={styles.uploadImage}>Capture Image</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button1Position: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  buttonShadowBox: {
    width: "74.27%",
    height: "8.53%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  captureChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorLimegreen_200,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  camIcon: {
    height: "55.44%",
    width: "78.66%",
    top: "8.59%",
    right: "9.99%",
    bottom: "35.97%",
    left: "11.35%",
  },
  photoCamera1Icon: {
    height: "13.6%",
    width: "19.75%",
    top: "28.4%",
    right: "39.5%",
    bottom: "58%",
    left: "40.75%",
  },
  button1: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPeru,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  uploadImage: {
    height: "75.54%",
    width: "66.68%",
    top: "18.87%",
    left: "17.28%",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  button: {
    top: "82.82%",
    right: "11.93%",
    bottom: "8.65%",
    left: "13.79%",
  },
  button2: {
    top: "69.75%",
    right: "11.91%",
    bottom: "21.72%",
    left: "13.81%",
  },
  capture: {
    height: "44.96%",
    width: "74.19%",
    top: "23.28%",
    right: "13.02%",
    bottom: "31.76%",
    left: "12.79%",
    position: "absolute",
  },
});

export default UploadImageFormContainer;
