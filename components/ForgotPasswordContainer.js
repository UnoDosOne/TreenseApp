import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ForgotPasswordContainer = () => {
  const [newpass, setNewpass] = useState("");
  const [cnfrmnewpass, setCnfrmnewpass] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    // Add your login logic here
    if (!newpass || !cnfrmnewpass) {
      alert("Both password fields are required.");
      // Perform authentication, e.g., API request, validation, etc.
      // If successful, navigate to the next screen
    } else if  (newpass === cnfrmnewpass){
      navigation.navigate("LogIn");
    } else {
      alert("Passwords do not match. Please check again.");
    }
  };

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.forgpassform}
    >
    
      <ScrollView contentContainerStyle={styles.scrollContainer}>

          <View style={styles.title}>
            <View style={styles.forgpassWrapper}>
              <Text style={styles.forgpass}>Forgot Password</Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.newpassTitle}>New Password</Text>
            <TextInput
              style={styles.inputfield1}
              value={newpass}
              onChangeText={setNewpass}
              placeholder="New Password"
              keyboardType="default"
              autoCapitalize="none"
              placeholderTextColor="rgba(0, 0, 0, 0.45)"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.cnfrmnewpassTitle}>Confirm New Password</Text>
            <TextInput
              style={styles.inputfield2}
              value={cnfrmnewpass}
              onChangeText={setCnfrmnewpass}
              placeholder="Confirm New Password"
              secureTextEntry
              placeholderTextColor="rgba(0, 0, 0, 0.45)"
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.cnfrmButton}
              onPress={handleLogin}
            >
              <Text style={styles.cnfrmText}>Confirm</Text>
            </TouchableOpacity>
          </View>

      </ScrollView>
    </KeyboardAvoidingView>    
  );
};

const styles = StyleSheet.create({
  forgpassform: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    width: 300,
    marginLeft: 16,
  },
  title: {
    overflow: "hidden",
    width: 290,
    justifyContent: "center",
  },
  forgpassWrapper: {
    width: 220,
    height: 39,
    alignSelf: "center",
  },
  forgpass: {
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  inputContainer: {
    marginTop: 44,
    alignSelf: "stretch",
  },
  newpassTitle: {
    fontSize: FontSize.size_xl,
    width: 136,
    height: 25,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorBlack,
    marginTop: -25,
    
  },
  cnfrmnewpassTitle:{
    fontSize: FontSize.size_xl,
    width: 136,
    height: 25,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorBlack,
    marginTop: -20,
  },
  inputfield1: {
    borderRadius: Border.br_3xs,
    backgroundColor: "#fff",
    height: 42,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_5xs,
    marginTop: 5,
    alignSelf: "stretch",
    borderWidth: 3,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  inputfield2: {
    borderRadius: Border.br_3xs,
    backgroundColor: "#fff",
    height: 42,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_5xs,
    marginTop: 5,
    alignSelf: "stretch",
    borderWidth: 3,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: "center",
  
  },
  cnfrmButton: {
    backgroundColor: "#BC58B2", // Change the background color here
    borderRadius: Border.br_3xs,
    height: 42,
    width: 230,
    alignItems: "center",
    justifyContent: "center",
  },
  cnfrmText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: "#fff",
  },
});

export default ForgotPasswordContainer;
