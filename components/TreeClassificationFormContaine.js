import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";

const TreeClassificationFormContaine = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.capture}>
      <View style={[styles.captureChild, styles.childPosition]} />
      <View style={styles.cam}>
        <View style={[styles.camChild, styles.childPosition]} />
      </View>
      <View style={styles.inputField}>
        <View style={[styles.inputField1, styles.childPosition]} />
        <Text style={[styles.treeClassification, styles.treeTypo]}>
          Tree Classification
        </Text>
        <Text style={[styles.yourTreeIs, styles.treeTypo]}>Your tree is:</Text>
      </View>
      <Image
        style={[styles.imageFill0Wght500Grad0OpszIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-fill0-wght500-grad0-opsz40-1.png")}
      />
      <Pressable
        style={styles.arrowBackIosFill0Wght500G}
        onPress={() => navigation.navigate("Photo")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-back-ios-fill0-wght500-grad0-opsz40-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    borderWidth: 1,
    borderStyle: "solid",
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  treeTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    width: "90.38%",
    height: "34.05%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  captureChild: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorLimegreen_200,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  camChild: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colorMediumorchid,
    borderColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  cam: {
    height: "48.95%",
    width: "69.84%",
    top: "10.74%",
    right: "14.4%",
    bottom: "40.31%",
    left: "15.76%",
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
  inputField1: {
    height: "54.04%",
    top: "45.96%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    bottom: "0%",
    right: "0%",
  },
  treeClassification: {
    top: "56.4%",
    left: "1.18%",
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_100,
  },
  yourTreeIs: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorWhite,
    left: "0%",
    fontSize: FontSize.size_base,
    width: "90.38%",
    height: "34.05%",
    top: "0%",
  },
  inputField: {
    height: "14.02%",
    width: "74.27%",
    top: "66.11%",
    right: "11.93%",
    bottom: "19.87%",
    left: "13.79%",
    position: "absolute",
  },
  imageFill0Wght500Grad0OpszIcon: {
    height: "17.18%",
    width: "25.71%",
    top: "26.73%",
    right: "36.99%",
    bottom: "56.09%",
    left: "37.3%",
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  arrowBackIosFill0Wght500G: {
    left: "7.21%",
    top: "89.98%",
    right: "83.39%",
    bottom: "4.3%",
    width: "9.4%",
    height: "5.73%",
    position: "absolute",
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

export default TreeClassificationFormContaine;
