import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

import Style from "./Style";

function ButtonContent(props) {
  const { text, bgcolor, color } = props;

  return (
    <View style={[Style.ButtonContainer]}>
      <Pressable
        style={[Style.button, { backgroundColor: bgcolor }]}
        onPress={() => {
          props.onPress({ text });
        }}
      >
        <Text
          style={[Style.text, { color: color, textTransform: "capitalize" }]}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
}

export default ButtonContent;
