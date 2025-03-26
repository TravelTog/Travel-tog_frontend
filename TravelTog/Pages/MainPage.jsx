import { Text, View } from "react-native";
import React from 'react'

import Button from "../components/ui/Button"

export default function MainPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button textLeft={1} textRight={2}/>
      {/* <Text>Travel tog</Text> */}
    </View>
  );
}