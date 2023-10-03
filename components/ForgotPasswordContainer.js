import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ForgotPasswordContainer = () => {
  return (
    <View style={styles.cnfrmbtnParent}>
      <View style={styles.cnfrmbtn}>
        <View style={[styles.cnfrmbtnChild, styles.cnfrmbtnChildPosition]} />
        <Text style={styles.confirm}>Confirm</Text>
      </View>
      <View style={[styles.confirmNewpass, styles.newPassPosition]}>
        <View style={[styles.inputfield, styles.inputfieldLayout]}>
          <View style={[styles.inputfieldChild, styles.titlePosition]} />
          <Text style={[styles.confirmNewPassword, styles.passwordTypo]}>
            Confirm New Password
          </Text>
        </View>
        <Text style={[styles.emailTitle, styles.emailTypo]}>
          Confirm New Password
        </Text>
      </View>
      <View style={[styles.newPass, styles.newPassPosition]}>
        <View style={[styles.inputfield, styles.inputfieldLayout]}>
          <View style={[styles.inputfieldChild, styles.titlePosition]} />
          <Text style={[styles.confirmNewPassword, styles.passwordTypo]}>
            New Password
          </Text>
        </View>
        <Text style={[styles.emailTitle1, styles.emailTypo]}>New Password</Text>
      </View>
      <View style={[styles.title, styles.titlePosition]}>
        <Text style={[styles.forgotPassword, styles.passwordTypo]}>
          Forgot Password
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cnfrmbtnChildPosition: {
    left: "0%",
    top: "0%",
    height: "100%",
  },
  newPassPosition: {
    height: "22.38%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  inputfieldLayout: {
    height: 42,
    width: 292,
    left: 0,
  },
  titlePosition: {
    top: 0,
    position: "absolute",
  },
  passwordTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  emailTypo: {
    fontSize: FontSize.size_lg,
    height: "32.47%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  cnfrmbtnChild: {
    bottom: "0%",
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorMediumseagreen,
    right: "0%",
    width: "100%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  confirm: {
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
  cnfrmbtn: {
    top: 305,
    left: 18,
    width: 264,
    height: 39,
    position: "absolute",
  },
  inputfieldChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_200,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 42,
    width: 292,
    left: 0,
  },
  confirmNewPassword: {
    height: "50%",
    width: "92.81%",
    top: "30.95%",
    left: "3.42%",
    color: Color.colorGray_300,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  inputfield: {
    top: 35,
    position: "absolute",
  },
  emailTitle: {
    width: "72.24%",
  },
  confirmNewpass: {
    top: "57.85%",
    bottom: "19.77%",
  },
  emailTitle1: {
    width: "45.48%",
  },
  newPass: {
    top: "27.03%",
    bottom: "50.58%",
  },
  forgotPassword: {
    width: "92.73%",
    fontSize: FontSize.size_13xl,
    lineHeight: 60,
    color: Color.colorBlack,
    left: "0%",
    top: "0%",
    height: "100%",
    textAlign: "left",
  },
  title: {
    left: 8,
    width: 284,
    height: 56,
  },
  cnfrmbtnParent: {
    top: 360,
    left: 66,
    width: 299,
    height: 344,
    position: "absolute",
  },
});

export default ForgotPasswordContainer;
