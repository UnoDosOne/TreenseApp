import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SignUpFormContainer from "../components/SignUpFormContainer";
import { Color } from "../GlobalStyles";

const Registeration = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.registeration}
      onPress={() => navigation.navigate("Welcome")}
    >
      <SignUpFormContainer />
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 10,
    height: 16,
  },
  registeration: {
    backgroundColor: Color.colorDarkseagreen,
    flex: 1,
    width: "100%",
    height: 840,
    overflow: "hidden",
  },
});

export default Registeration;
