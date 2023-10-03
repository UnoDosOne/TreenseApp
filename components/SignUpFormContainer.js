import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const SignUpFormContainer = () => {
  return (
    <View style={styles.sign0upForm}>
      <View style={styles.signbtn}>
        <View style={[styles.signbtnChild, styles.emailTitlePosition]} />
        <Text style={styles.createAccount}>Create Account</Text>
      </View>
      <View style={[styles.phonenumber, styles.emailPosition]}>
        <View style={[styles.inputfield, styles.inputfieldLayout]}>
          <View style={[styles.inputfieldChild, styles.inputfieldLayout]} />
          <Text style={[styles.text, styles.emailTypo]}>1234566</Text>
        </View>
        <Text style={[styles.emailTitle, styles.emailTypo]}>Phone Number</Text>
      </View>
      <View style={[styles.password, styles.passwordPosition]}>
        <View style={[styles.inputfield, styles.inputfieldLayout]}>
          <View style={[styles.inputfieldChild, styles.inputfieldLayout]} />
          <Text style={[styles.password1, styles.emailTypo]}>Password</Text>
        </View>
        <Text style={[styles.emailTitle, styles.emailTypo]}>Password</Text>
      </View>
      <View style={[styles.email, styles.emailPosition]}>
        <View style={[styles.inputfield, styles.inputfieldLayout]}>
          <View style={[styles.inputfieldChild, styles.inputfieldLayout]} />
          <Text style={[styles.email1, styles.emailTypo]}>Email</Text>
        </View>
        <Text style={[styles.emailTitle, styles.emailTypo]}>Email</Text>
      </View>
      <View style={[styles.lastname, styles.passwordPosition]}>
        <View style={[styles.inputfield, styles.inputfieldLayout]}>
          <View style={[styles.inputfieldChild, styles.inputfieldLayout]} />
          <Text style={[styles.lastName, styles.emailTypo]}>Last Name</Text>
        </View>
        <Text style={[styles.emailTitle, styles.emailTypo]}>Last Name</Text>
      </View>
      <View style={[styles.firstname, styles.emailPosition]}>
        <View style={[styles.inputfield, styles.inputfieldLayout]}>
          <View style={[styles.inputfieldChild, styles.inputfieldLayout]} />
          <Text style={[styles.firstName, styles.emailTypo]}>First Name</Text>
        </View>
        <Text style={[styles.emailTitle, styles.emailTypo]}>First Name</Text>
      </View>
      <Text style={[styles.signupTitle, styles.emailTypo]}>SIGN UP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTitlePosition: {
    left: "0%",
    top: "0%",
  },
  emailPosition: {
    right: "0.33%",
    width: "99.67%",
    height: "12.46%",
    left: "0%",
    position: "absolute",
  },
  inputfieldLayout: {
    height: 42,
    width: 292,
    left: 0,
    position: "absolute",
  },
  emailTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  passwordPosition: {
    left: "0.33%",
    width: "99.67%",
    height: "12.46%",
    right: "0%",
    position: "absolute",
  },
  signbtnChild: {
    height: "100%",
    width: "100%",
    bottom: "0%",
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorMediumseagreen,
    right: "0%",
    left: "0%",
    position: "absolute",
  },
  createAccount: {
    height: "58.97%",
    width: "67.05%",
    top: "28.21%",
    left: "15.91%",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  signbtn: {
    top: 579,
    left: 14,
    width: 264,
    height: 39,
    position: "absolute",
  },
  inputfieldChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_200,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
  },
  text: {
    width: "92.12%",
    color: Color.colorGray_300,
    left: "3.42%",
    top: "30.95%",
    height: "50%",
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  inputfield: {
    top: 35,
  },
  emailTitle: {
    height: "32.47%",
    width: "45.48%",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    left: "0%",
    top: "0%",
  },
  phonenumber: {
    top: "74.76%",
    bottom: "12.78%",
  },
  password1: {
    width: "92.47%",
    color: Color.colorGray_300,
    left: "3.42%",
    top: "30.95%",
    height: "50%",
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  password: {
    top: "58.58%",
    bottom: "28.96%",
  },
  email1: {
    width: "90.07%",
    color: Color.colorGray_300,
    left: "3.42%",
    top: "30.95%",
    height: "50%",
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  email: {
    top: "42.39%",
    bottom: "45.15%",
  },
  lastName: {
    width: "91.44%",
    color: Color.colorGray_300,
    left: "3.42%",
    top: "30.95%",
    height: "50%",
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  lastname: {
    top: "26.21%",
    bottom: "61.33%",
  },
  firstName: {
    width: "92.81%",
    color: Color.colorGray_300,
    left: "3.42%",
    top: "30.95%",
    height: "50%",
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  firstname: {
    top: "10.03%",
    bottom: "77.51%",
  },
  signupTitle: {
    left: "28.33%",
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    top: "0%",
    textAlign: "left",
  },
  sign0upForm: {
    top: 81,
    left: 65,
    width: 300,
    height: 618,
    position: "absolute",
  },
});

export default SignUpFormContainer;
