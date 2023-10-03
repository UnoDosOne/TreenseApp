import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Button as RNPButton } from "react-native-paper";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const LoginForm = () => {
  const [inputfieldTextInput, setInputfieldTextInput] = useState("Email");
  const [inputfieldTextInput1, setInputfieldTextInput1] = useState("Password");
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.loginform, styles.loginformFlexBox]}>
      <View style={[styles.title, styles.frameFlexBox]}>
        <View style={styles.signinWrapper}>
          <Text style={[styles.signin, styles.loginFlexBox]}>LOGIN</Text>
        </View>
      </View>
      <View style={styles.frameSpaceBlock}>
        <Text style={[styles.emailTitle, styles.loginFlexBox]}>Email</Text>
        <TextInput
          style={[styles.inputfield, styles.loginTypo]}
          value={inputfieldTextInput}
          onChangeText={setInputfieldTextInput}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="characters"
          multiline={false}
          placeholderTextColor="rgba(0, 0, 0, 0.45)"
        />
      </View>
      <View style={styles.frameSpaceBlock}>
        <Text style={[styles.emailTitle, styles.loginFlexBox]}>Password</Text>
        <TextInput
          style={[styles.inputfield, styles.loginTypo]}
          value={inputfieldTextInput1}
          onChangeText={setInputfieldTextInput1}
          placeholder="Password"
          autoCapitalize="characters"
          secureTextEntry={true}
          placeholderTextColor="rgba(0, 0, 0, 0.45)"
        />
      </View>
      <View style={[styles.frame, styles.frameSpaceBlock]}>
        <View style={[styles.lgnbtn, styles.lgnbtnFlexBox]}>
          <RNPButton
            style={[styles.lgnbtnChild, styles.inputfieldBorder]}
            mode="contained"
            onPress={() => navigation.navigate("Photo")}
            contentStyle={styles.rectangleButtonBtn}
          />
          <Text style={[styles.login, styles.loginTypo]}>Login</Text>
        </View>
      </View>
      <View style={[styles.frame1, styles.frameSpaceBlock]}>
        <Button
          style={styles.loginformFlexBox}
          title="Forgot password?"
          type="clear"
          titleStyle={styles.frameButtonBtn}
          onPress={() => navigation.navigate("ForgotPass")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleButtonBtn: {
    borderRadius: 10,
    height: 39,
    width: 230,
  },
  frameButtonBtn: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  loginformFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameFlexBox: {
    overflow: "hidden",
    justifyContent: "center",
  },
  loginFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  loginTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  frameSpaceBlock: {
    marginTop: 44,
    alignSelf: "stretch",
  },
  lgnbtnFlexBox: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  inputfieldBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  signin: {
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  signinWrapper: {
    width: 118,
    height: 39,
  },
  title: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  emailTitle: {
    fontSize: FontSize.size_xl,
    width: 136,
    height: 25,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  inputfield: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_200,
    height: 42,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_5xs,
    marginTop: 10,
    justifyContent: "flex-end",
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  lgnbtnChild: {
    undefined: "",
  },
  login: {
    flex: 1,
    marginLeft: -145,
    textAlign: "left",
    color: Color.colorBlack,
  },
  lgnbtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame: {
    overflow: "hidden",
    justifyContent: "center",
  },
  frame1: {
    alignItems: "flex-end",
    overflow: "hidden",
    justifyContent: "center",
  },
  loginform: {
    marginTop: 69,
  },
});

export default LoginForm;
