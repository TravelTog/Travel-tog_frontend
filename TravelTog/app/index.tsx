import { View } from "react-native";
import Tabs from '../Rout/Tab';
import React from "react";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tabs />
    </View>
  );
}
