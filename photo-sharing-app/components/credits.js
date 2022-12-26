import { StyleSheet, Text, View } from "react-native";

// Credits component
export default function Credit() {
  return (
    <View style={styles.credit_container}>
      <Text style={styles.credits}>Made with ❣️ Vignesh Kanna JS | 2021</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  credit_container: {
    height: "5%",
    backgroundColor: "#0d0d26",
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
