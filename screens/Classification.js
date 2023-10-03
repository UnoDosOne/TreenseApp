import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import TreeClassificationFormContaine from "../components/TreeClassificationFormContaine";
import { Border, Color } from "../GlobalStyles";

const Classification = () => {
  return (
    <View style={styles.classification}>
      <Image
        style={[styles.baseIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/base.png")}
      />
      <View
        style={[styles.classificationChild, styles.classificationPosition]}
      />
      <View
        style={[styles.classificationItem, styles.classificationPosition]}
      />
      <Image
        style={[styles.notif1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/notif-1.png")}
      />
      <Image
        style={[styles.accIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/acc.png")}
      />
      <Image
        style={[styles.map1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/map-1.png")}
      />
      <Image
        style={[styles.polyIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/poly.png")}
      />
      <Image
        style={[styles.add1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/add-1.png")}
      />
      <TreeClassificationFormContaine />
      <Image
        style={styles.space4Icon}
        contentFit="cover"
        source={require("../assets/space-4.png")}
      />
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
  classificationPosition: {
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
  classificationChild: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.colorMintcream,
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  classificationItem: {
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
    right: "82.33%",
    left: "9.3%",
  },
  accIcon: {
    width: "6.98%",
    right: "9.77%",
    left: "83.26%",
  },
  map1Icon: {
    width: "7.21%",
    right: "26.28%",
    left: "66.51%",
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
  classification: {
    backgroundColor: Color.colorFirebrick,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Classification;
