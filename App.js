import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarContent from "./Component/CarItems/CarContent";
import Style from "./Component/CarItems/Style";
import CarsContent from "./Component/CarList/CarsContent";
import HeaderContent from "./Component/CarItems/Header/HeaderContent";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderContent />
      <CarsContent />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
