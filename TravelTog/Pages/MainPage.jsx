import { View } from "react-native";
import React from 'react'

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function MainPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%'
      }}
    >
      <Button text="Войти" />
      <Input
        placeholder="Enter your password"
        isPassword={true}
        keyboardType="default"
        icon={Input}
      />
    </View>
  );
}
