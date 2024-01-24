import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const navigation = useNavigation();
  const [isDropdownVisible, setDropdownVisible] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Set the introductory message when the component mounts
    const delayTime1 = 3000;

    // Set isTyping to true before the delay
    setIsTyping(true);

    // Use setTimeout to delay the execution of the introductory message
    setTimeout(() => {
      // Assuming GiftedChat message format for the introductory message
      const introMessage = {
        _id: 0,
        text: "Welcome to Treense! Feel free to upload photos of trees for me to analyse!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Treense",
        },
      };

      // Set the introductory message after the delay
      setMessages([introMessage]);

      // Set isTyping to false after the delay
      setIsTyping(false);
    }, delayTime1);
  }, []);

  const handleImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        // Create a new message with the image URI
        const newMessage = {
          _id: new Date().getTime(),
          image: result.assets[0].uri, // Access the URI within the first asset
          createdAt: new Date(),
          user: {
            _id: 1,
            name: "User",
          },
        };

        // Update the state to include the new message
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, newMessage)
        );

        // Now you can send the image to the Roboflow model and update the message later
        sendImageToRoboflow(result.assets[0].uri);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
      return;
    }

    try {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        // Create a new message with the image URI
        const newMessage = {
          _id: new Date().getTime(),
          image: result.assets[0].uri, // Access the URI within the first asset
          createdAt: new Date(),
          user: {
            _id: 1,
            name: "User",
          },
        };

        // Update the state to include the new message
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, newMessage)
        );

        // Now you can send the image to the Roboflow model and update the message later
        sendImageToRoboflow(result.assets[0].uri);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const sendImageToRoboflow = async (imageUri) => {
    try {
      // Set isTyping to true before making the API call
      setIsTyping(true);

      let base64Img = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      base64Img = `data:image/jpg;base64,${base64Img}`;

      axios({
        method: "POST",
        url: "https://classify.roboflow.com/treense/1?api_key=pnHKQq7IhPYTY8LpehFz",
        data: base64Img,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((res) => {
        console.log("Results", res.request._response);

        const responseData = res.data;
        const top = responseData.top;

        // Create a bot message based on the analysis results
        let botMessageText;
        if (top === "healthy") {
          botMessageText = (
            <Text>
              The tree you uploaded appears to be{" "}
              <Text style={{ color: "green" }}>healthy</Text>.
            </Text>
          );
        } else if (top === "unhealthy") {
          botMessageText = (
            <Text>
              This tree may be in{" "}
              <Text style={{ color: "red" }}>unhealthy</Text> condition, please
              seek expert advice.
            </Text>
          );
        } else {
          botMessageText = "I am not sure about the health of the tree.";
        }

        // Assuming GiftedChat message format for the bot message
        const botMessage = {
          _id: new Date().getTime() + 1,
          text: botMessageText,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Treense",
          },
          image: imageUri,
        };

        // Update the state to include the bot message
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, botMessage)
        );

        // Set isTyping to false after the responses are generated
        setIsTyping(false);

        // Set a time delay (e.g., 5000 milliseconds or 5 seconds) for the encouragement message
        const delayTime = 5000;

        const encouragementMessages = [
          "Feel free to upload another image for analysis!",
          "Great job! Want to analyze another tree?",
          "Thats awesome, care to upload more?",
        ];
        // Randomly select an encouragement message
        const randomEncouragementMessage =
          encouragementMessages[
            Math.floor(Math.random() * encouragementMessages.length)
          ];
        // Use setTimeout to delay the execution of the encouragement message
        setIsTyping(true);
        setTimeout(() => {
          // Assuming GiftedChat message format for the encouragement message
          const encourageMessage = {
            _id: new Date().getTime() + 2,
            text: randomEncouragementMessage,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: "Treense",
            },
          };
          // Update the state to include the encouragement message
          setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, encourageMessage)
          );
          // Set isTyping to false after the encouragement message is added
          setIsTyping(false);
        }, delayTime);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const renderInputToolbar = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <TouchableOpacity
          style={{
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#43D338",
            paddingVertical: 5,
            paddingHorizontal: 90,
            borderWidth: 2,
            borderRadius: 20,
          }}
          onPress={handleImagePicker}
        >
          <Text>Upload Photo</Text>
          <MaterialIcons name="attach-file" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
            backgroundColor: "#43D338",
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderWidth: 2,
            borderRadius: 20,
          }}
          onPress={handleCamera}
        >
          <MaterialIcons name="camera-alt" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  const renderAvatar = (props) => {
    // Customize the avatar for each message
    return (
      <View style={{ marginRight: 5 }}>
        {/* <MaterialIcons name="android" size={32} color="green" /> */}
        <Image
          source={require("../assets/avatar.png")}
          style={{
            width: 32,
            height: 32,
            borderRadius: 20,
            backgroundColor: "white",
          }}
        />
      </View>
    );
  };
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#43D338",
            borderWidth: 1,
          },
          left: {
            backgroundColor: "#fff",
            borderWidth: 1,
          },
        }}
      />
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: isDarkMode ? "#020112" : "white" }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: isDarkMode ? "#020112" : "white",
            padding: 10,
            marginTop: 40,
            marginBottom: 5,
          }}
        > 
        <View
          style={{
            backgroundColor: isDarkMode ? "#020112" : "white",
            flexDirection: "row",
            justifyContent: "space-between", 
            alignItems: "center", 
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Treense
          </Text>
          <Pressable onPress={() => setDropdownVisible(true)}>
            <AntDesign name="ellipsis1" size={24} color={isDarkMode ? "white" : "#020112"} />
          </Pressable>
        </View>
          <Modal
            isVisible={isDropdownVisible}
            onBackdropPress={() => setDropdownVisible(false)}
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInTiming={1000}
            animationOutTiming={500}    // Adjust the timing as needed
            style={{
              position: 'absolute',
              top: 20 + 10 + 10, // Adjust these values
              right: 15,
              margin: 0,
            }}   // Remove default margin
          >
            <View style={{ backgroundColor: 'white', padding: 5 ,borderRadius: 10, }}>

              <TouchableOpacity style={{marginBottom: 5, padding: 5,}} onPress={() => {
                setIsDarkMode((prevMode) => !prevMode);
                
              }}>
                <Text>Dark Mode</Text>
              </TouchableOpacity>
              <View style={{ height: 2, backgroundColor: 'gray',}} />
              <TouchableOpacity style={{padding: 5, }} onPress={() => {
                navigation.navigate("LogIn");
                setDropdownVisible(false);
              }}>
                <Text>Log Out</Text>
              </TouchableOpacity>

            </View>
          </Modal>
          
          <GiftedChat
            messages={messages}
            onSend={(newMessages) => handleSend(newMessages)}
            user={{ _id: 1 }}
            isTyping={isTyping}
            renderInputToolbar={renderInputToolbar}
            renderBubble={renderBubble}
            renderAvatar={renderAvatar} // Add this line to use the custom avatar renderer
            listViewProps={{
              style: {
                width: "100%",
                backgroundColor: "#EAF2EC",
                backgroundColor: isDarkMode ? "#030324" : "#EAF2EC",
                paddingVertical: 10,
                borderWidth: 1,
                borderRadius: 20,
              },
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Chatbox;
