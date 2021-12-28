import { StyleSheet, Text, View } from "react-native";

// Credits component
export default function Credit() {
  return (
    <View style={styles.credit_container}>
      <Text style={styles.credits}>Made with ❣️ VK</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  credit_container: {
    height: "5%",
    backgroundColor: "#9D2DD2",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  credits: {
    color: "#F2F3E8",
    fontFamily: "Roboto",
    fontStyle: "italic",
    letterSpacing: 3,
  },
});
