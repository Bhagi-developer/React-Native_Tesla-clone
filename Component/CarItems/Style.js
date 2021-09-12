import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const Style = StyleSheet.create({
  carContainer: {
    flex: 1,
    height: Dimensions.get("window").height,
  },
  TitleContainer: {
    marginVertical: "20%",
    alignItems: "center",
  },

  Title: {
    fontSize: 30,
    fontWeight: "900",
  },
  Tag: { color: "#555D50" },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "contain",
  },
  ButtonContainer: {
    width: "100%",
    marginTop: "95%",
  },
  TagLink: {
    textDecorationLine: "underline",
  },
});

export default Style;
