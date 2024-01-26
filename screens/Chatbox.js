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
import messagesData from './message.json';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const navigation = useNavigation();
  const [isDropdownVisible, setDropdownVisible] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {

    const delayTime1 = 3000;

    setIsTyping(true);

    setTimeout(() => {
      const introMessage = {
        _id: 0,
        text: "Welcome to Treense! Feel free to upload photos of trees for me to analyse!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Treense",
        },
      };
      setMessages([introMessage]);

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
        const newMessage = {
          _id: new Date().getTime(),
          image: result.assets[0].uri,
          createdAt: new Date(),
          user: {
            _id: 1,
            name: "User",
          },
        };

        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, newMessage)
        );

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

        const newMessage = {
          _id: new Date().getTime(),
          image: result.assets[0].uri,
          createdAt: new Date(),
          user: {
            _id: 1,
            name: "User",
          },
        };

        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, newMessage)
        );

        sendImageToRoboflow(result.assets[0].uri);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const sendImageToRoboflow = async (imageUri) => {
    try {
      setIsTyping(true);
  
      let base64Img = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });
  
      base64Img = `data:image/jpg;base64,${base64Img}`;
  
      axios({
        method: "POST",
        url: "https://detect.roboflow.com/falcataria/5?api_key=H9lu6r4sXgYKQoRQa4Wp",
        data: base64Img,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((res) => {
        console.log("Results", res.request._response);
  
        const responseData = res.data;
        const predicted_classes = responseData.predicted_classes;
  
        let botMessageText;
        let botMessageDetails;
        let botPreventionSteps;
        let botCombatSteps;
  
        if (predicted_classes in messagesData.healthMessages) {
          const healthMessage = messagesData.healthMessages[predicted_classes];
  
          if (typeof healthMessage === 'string') {

            botMessageText = healthMessage;
          } else if (typeof healthMessage === 'object' && healthMessage.message) {

            botMessageText = healthMessage.message;

            botMessageDetails = healthMessage.details;

            botPreventionSteps = healthMessage.preventionSteps;
  
            botCombatSteps = healthMessage.combatSteps;
          }
        } else {

          botMessageText = messagesData.healthMessages.default;
        }
  
        let delayTime = 3000; 
        const delayIncrement = 1000; 

        if (botMessageText) {

          const healthMessage = {
            _id: new Date().getTime() + 1,
            text: botMessageText,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: "Treense",
            },
            image: imageUri,
          };

          setIsTyping(true);
          setTimeout(() => {

            setMessages((previousMessages) =>
              GiftedChat.append(previousMessages, healthMessage)
            );

            setIsTyping(false);
          }, delayTime);
  
          delayTime += delayIncrement;
        }

        if (botCombatSteps) {

          const combatMessage = {
            _id: new Date().getTime() + 5,
            text: `Combat Steps: ${botCombatSteps}`,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: "Treense",
            },
          };

          setIsTyping(true);
          setTimeout(() => {

            setMessages((previousMessages) =>
              GiftedChat.append(previousMessages, combatMessage)
            );

            setIsTyping(false);
          }, delayTime);

          delayTime += delayIncrement;
        }

      // Display information about prevention steps (if available)
      if (botPreventionSteps) {
        // Assuming GiftedChat message format for the prevention steps
        const preventionMessage = {
          _id: new Date().getTime() + 3,
          text: `Prevention Steps:\n${botPreventionSteps
            .split('\n')
            .map((point) => `\u2022 ${point}`)
            .join('\n')}`, // Concatenate the steps into a single string
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Treense",
          },
        };

        // Use setTimeout to add a delay before sending the prevention message
        setIsTyping(true);
        setTimeout(() => {
          // Update the state to include the prevention message
          setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, preventionMessage)
          );
          // Set isTyping to false after the prevention message is added
          setIsTyping(false);
        }, delayTime);

        // Increment delay time for the next message
        delayTime += delayIncrement;
      }

        const encouragementMessages = messagesData.encouragementMessages;
        const randomEncouragementMessage =
          encouragementMessages[
            Math.floor(Math.random() * encouragementMessages.length)
          ];
        
        setIsTyping(true);
        setTimeout(() => {

          const encourageMessage = {
            _id: new Date().getTime() + 6,
            text: randomEncouragementMessage,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: "Treense",
            },
          };

          setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, encourageMessage)
          );

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
            paddingHorizontal: 75,
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
            marginRight: 25,
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

    return (
      <View style={{ marginRight: 5 }}>

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
            animationOutTiming={500}    
            style={{
              position: 'absolute',
              top: 20 + 10 + 10, 
              right: 15,
              margin: 0,
            }}  
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
            renderAvatar={renderAvatar} 
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