import { View } from "react-native";
import MainPage from '../Pages/MainPage';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainPage />
    </View>
  );
}
