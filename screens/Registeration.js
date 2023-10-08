import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SignUpForm from "../components/SignUpFormContainer";
import { Color } from "../GlobalStyles";

const Registeration = () => {
  const navigation = useNavigation();

  return (
    <View
      style={styles.registeration}
      
    >
      <Pressable style={styles.backIcon1} onPress={() => navigation.navigate("Welcome")}>
        <Image
        style={styles.backIcon2}
        contentFit="cover"
        source={require("../assets/back1.png")}
        />
      </Pressable>

      <SignUpForm />

    </View>
  );
};

const styles = StyleSheet.create({
  backIcon1: {
    marginLeft: 25,
    marginTop: 80,
    width: 15,
    height: 20,
  },
  backIcon2: {
    width: 15,
    height: 20,
  },
  registeration: {
    backgroundColor: "#8fd296",
    flex: 1,
    width: "100%",
    height: 840,
    overflow: "hidden",
  },
});

export default Registeration;
