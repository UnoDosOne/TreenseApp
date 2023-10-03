import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import UploadImageFormContainer from "../components/UploadImageFormContainer";
import { Border, Color } from "../GlobalStyles";

const Photo = () => {
  return (
    <View style={styles.photo}>
      <Image
        style={[styles.baseIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/base.png")}
      />
      <View style={[styles.photoChild, styles.photoPosition]} />
      <View style={[styles.photoItem, styles.photoPosition]} />
      <Image
        style={[styles.notif1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/notif-11.png")}
      />
      <Image
        style={[styles.accIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/acc1.png")}
      />
      <Image
        style={[styles.map1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/map-11.png")}
      />
      <Image
        style={styles.space4Icon}
        contentFit="cover"
        source={require("../assets/space-4.png")}
      />
      <Image
        style={[styles.polyIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/poly1.png")}
      />
      <Image
        style={[styles.add1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/add-1.png")}
      />
      <UploadImageFormContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  photoPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  iconPosition: {
    bottom: "3.11%",
    height: "3.33%",
    top: "93.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  baseIcon: {
    borderRadius: Border.br_4xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  photoChild: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.colorMintcream,
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  photoItem: {
    height: "9.55%",
    top: "90.45%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLimegreen_100,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    position: "absolute",
  },
  notif1Icon: {
    width: "8.37%",
    right: "82.56%",
    left: "9.07%",
  },
  accIcon: {
    width: "7.21%",
    right: "9.53%",
    left: "83.26%",
  },
  map1Icon: {
    width: "6.98%",
    right: "26.51%",
    left: "66.51%",
  },
  space4Icon: {
    height: "3.77%",
    width: "7.91%",
    right: "66.05%",
    bottom: "2.67%",
    left: "26.05%",
    top: "93.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  polyIcon: {
    height: "5.9%",
    width: "11.93%",
    top: "87.88%",
    right: "44.03%",
    bottom: "6.22%",
    left: "44.03%",
  },
  add1Icon: {
    height: "2.58%",
    width: "6.05%",
    top: "89.16%",
    right: "46.98%",
    bottom: "8.26%",
    left: "46.98%",
  },
  photo: {
    backgroundColor: Color.colorFirebrick,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Photo;
