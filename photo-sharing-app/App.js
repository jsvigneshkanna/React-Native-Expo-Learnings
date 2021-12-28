import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "./components/header";
import ImageShare from "./components/imageShare";
import Credit from "./components/credits";
// Main App
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ImageShare />
      <Credit />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#280032",
  },
});
