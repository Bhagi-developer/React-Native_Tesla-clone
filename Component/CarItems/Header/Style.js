import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Style = StyleSheet.create({
  HeaderContainer: {
    width: "100%",
    position: "absolute",
    top: 50,
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  logo: { width: 100, height: 20, resizeMode: "contain" },
  menu: { width: 25, height: 25, resizeMode: "contain" },
});

export default Style;
