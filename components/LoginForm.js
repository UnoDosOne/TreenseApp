import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

// Import your credentials from the JSON file
import credentials from './credentials.json';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    // Validate the email format
    if (!isEmailValid(email)) {
      alert("Invalid email format. Please enter a valid email address.");
      return;
    }

    // Find the user with matching credentials
    const user = credentials.users.find((user) => user.email === email && user.password === password);

    if (user) {
      // Authentication successful, navigate to the next screen
      navigation.navigate("Chatbox");
    } else {
      // Authentication failed, show an error message
      alert("Invalid email or password. Please try again.");
    }
  };
  
  

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.loginform}
  >
    <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.title}>
            <View style={styles.signinWrapper}>
              <Text style={styles.signin}>LOGIN</Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.emailTitle}>Email</Text>
            <TextInput
              style={styles.inputfield1}
              value={email}
              onChangeText={setEmail}
              placeholder="Email@gmail.com"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="rgba(0, 0, 0, 0.45)"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.passTitle}>Password</Text>
            <TextInput
              style={styles.inputfield2}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry
              placeholderTextColor="rgba(0, 0, 0, 0.45)"
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.forgotPassword}>
            <Text 
            style={styles.forgotPasswordText}
            onPress={() => navigation.navigate("ForgotPass")}
            >Forgot password?</Text>
          </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  loginform: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    width: 300,
    marginLeft: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    overflow: "hidden",
    justifyContent: "center",

  },
  signinWrapper: {
    width: 118,
    height: 39,
    alignSelf:"center",
    alignItems: "center",

  },
  signin: {
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  inputContainer: {
    marginTop: 44,
    width: 280,
    
  },
  emailTitle: {
    fontSize: FontSize.size_xl,
    width: 136,
    height: 25,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorBlack,
    marginTop: -25,
    
  },
  passTitle:{
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
  loginButton: {
    backgroundColor: "#BC58B2", // Change the background color here
    borderRadius: Border.br_3xs,
    height: 42,
    width: 230,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: "#fff",
  },
  forgotPassword: {
    marginTop: 20,
    alignSelf: "center",
  },
  forgotPasswordText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorBlack,
    textDecorationLine: "underline",
  },
});

export default LoginForm;
