import React from "react";
import { View, Dimensions, FlatList } from "react-native";

import Cars from "./Cars";
import CarContent from "../CarItems/CarContent";
import Style from "./Style";

function CarsContent() {
  return (
    <View style={Style.container}>
      <FlatList
        data={Cars}
        renderItem={({ item }) => <CarContent caritem={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"normal"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
}

export default CarsContent;

// car={item}
