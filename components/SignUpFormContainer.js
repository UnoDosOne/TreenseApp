import React, { useState } from "react";
import {Text, StyleSheet, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView,} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import EyeIcon from '../assets/eyeon.png';
import HiddenEyeIcon from '../assets/eyeoff.png';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [isPasswordVisible2, setPasswordVisibility2] = useState(false);
  

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {
    // Validate the email format    
    if (!firstName || !lastName || !phoneNumber) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!isEmailValid(email)) {
      alert("Invalid email format. Please enter a valid email address.");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please re-enter your password.");
      return;
    }
    // Perform sign-up logic here (you can add this logic)

    // After successful sign-up, navigate to the next screen (e.g., Home)
    navigation.navigate("LogIn");
  };
  
  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };
  const togglePasswordVisibility2 = () => {
    setPasswordVisibility2(!isPasswordVisible2);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.signupform}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.title}>
          <View style={styles.signupWrapper}>
            <Text style={styles.signup}>SIGN-UP</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.nameTitle}>First Name</Text>
          <TextInput
            style={styles.inputfield}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="First Name"
            placeholderTextColor="rgba(0, 0, 0, 0.45)"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.nameTitle}>Last Name</Text>
          <TextInput
            style={styles.inputfield}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Last Name"
            placeholderTextColor="rgba(0, 0, 0, 0.45)"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.emailTitle}>Email</Text>
          <TextInput
            style={styles.inputfield}
            value={email}
            onChangeText={setEmail}
            placeholder="Email@gmail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="rgba(0, 0, 0, 0.45)"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.passTitle1}>Password</Text>
          <View style={styles.passwordInput}>
            <TextInput
              style={styles.inputfield}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry={!isPasswordVisible}
              placeholderTextColor="rgba(0, 0, 0, 0.45)"
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Image 
                source={isPasswordVisible ? HiddenEyeIcon : EyeIcon} 
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.passTitle2}>Confirm Password</Text>
          <View style={styles.passwordInput}>
            <TextInput
              style={styles.inputfield}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm Password"
              secureTextEntry={!isPasswordVisible2}
              placeholderTextColor="rgba(0, 0, 0, 0.45)"
            />
            <TouchableOpacity onPress={togglePasswordVisibility2}>
              <Image 
                source={isPasswordVisible2 ? HiddenEyeIcon : EyeIcon} 
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.phoneTitle}>Phone Number</Text>
          <TextInput
            style={styles.phoneinputfield}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            placeholderTextColor="rgba(0, 0, 0, 0.45)"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={handleSignUp}
          >
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  signupform: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    width: 280,
   
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
  signupWrapper: {
    width: 118,
    height: 39,
    marginLeft: 30,
  },
  signup: {
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  inputContainer: {
    marginTop: 44,
    alignSelf: "stretch",
    
  },
  nameTitle: {
    fontSize: FontSize.size_xl,
    width: 136,
    height: 25,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorBlack,
    marginTop: -25,
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
  passTitle1: {
    fontSize: FontSize.size_xl,
    width: 136,
    height: 25,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorBlack,
    marginTop: -30,
  },
  passTitle2: {
    fontSize: FontSize.size_xl,
    width: 136,
    height: 25,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorBlack,
    marginTop: -55,
  },
  phoneTitle: {
    fontSize: FontSize.size_xl,
    width: 136,
    height: 25,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorBlack,
    marginTop: -50,
  },
  inputfield: {
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
  passwordInput: {
    flexDirection: "column",
    alignItems: "center",
    width: 280,
  },
  phoneinputfield: {
    borderRadius: Border.br_3xs,
    backgroundColor: "#fff",
    height: 42,
    width: 200,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_5xs,
    marginTop: 5,
    borderWidth: 3,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  eyeIcon: {
    top: -32.5,
    left: 115,
    width: 24,
    height: 24,
  },  
  buttonContainer: {
    marginTop: 30,
  },
  signupButton: {
    backgroundColor: "#BC58B2", // Change the background color here
    borderRadius: Border.br_3xs,
    height: 42,
    width: 280,
    alignItems: "center",
    justifyContent: "center",
  },
  signupText: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: "#fff",
  },
  
});

export default SignUpForm;
