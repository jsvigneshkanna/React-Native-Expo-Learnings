import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import sampleImage from "../assets/vk-round-logo.png";

// Importing google montserrat font
// import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat";

// Image sharing component
export default function ImageShare() {
  return (
    <View style={styles.share_container}>
      <Image source={sampleImage} style={styles.sample_image} />
      <Text style={styles.instruction}>Click below to select an Image and share</Text>
      <TouchableOpacity onPress={() => alert("Hello, world!")} style={styles.btn}>
        <Text style={{ fontSize: 18, fontFamily: "Roboto", color: "#F2F3E8", fontWeight: "bold" }}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

// Image Sharing component stylesheet
const styles = StyleSheet.create({
  share_container: {
    // marginTop: 10,
    display: "flex",
    height: "75%",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  sample_image: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    borderRadius: 10,
    resizeMode: "contain",
    marginBottom: 20,
  },
  instruction: {
    fontFamily: "Roboto",
    fontWeight: "100",
    fontSize: 24,
    color: "#C9C2E5",
    textAlign: "center",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#9D2DD2",
    borderRadius: 10,
    padding: 20,
    borderBottomColor: "white",
    marginTop: 30,
  },
});
