import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Style from "./Style";

function HeaderContent() {
  return (
    <View style={Style.HeaderContainer}>
      <Image
        style={Style.logo}
        source={require("../../../assets/images/logo.png")}
      />
      <Image
        style={Style.menu}
        source={require("../../../assets/images/menu.png")}
      />
    </View>
  );
}

export default HeaderContent;
