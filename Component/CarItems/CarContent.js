import React from "react";
import { StyleSheet, Text, View, ImageBackground, Alert } from "react-native";
import Style from "./Style";
import ButtonContent from "./StyledButton.js/ButtonContent";

function carContent(props) {
  const { title, TagLineText, LinkText, img } = props.caritem;

  function handlePress(props) {
    // console.warn(props.text + " was pressed");
    if (props == "Custom Order") {
      Alert.alert(props, "Model Has $70,000 Price.");
    } else {
      Alert.alert(props, "This is " + props);
    }
  }

  return (
    <View style={Style.carContainer}>
      <ImageBackground source={img} style={Style.image} />
      <View style={Style.TitleContainer}>
        <Text style={Style.Title}>{title}</Text>
        <Text style={Style.Tag}>
          {TagLineText} <Text style={Style.TagLink}>{LinkText}</Text>
        </Text>

        <View style={Style.ButtonContainer}>
          <ButtonContent
            text="Custom Order"
            bgcolor="white"
            color="black"
            onPress={() => {
              handlePress("Custom Order");
            }}
          />
          <ButtonContent
            text="Existing Inventory"
            bgcolor="#36454F"
            color="white"
            onPress={() => {
              handlePress("Existing Inventory");
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default carContent;
