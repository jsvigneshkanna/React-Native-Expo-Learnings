import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import sampleImage from "../assets/vk-round-logo.png";

// Importing google montserrat font
// import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat";

// Image sharing component
export default function ImageShare() {
  // useState logic to set the picked image
  let [pickedImage, setPickedImage] = React.useState(null);

  // Image picking logic (Async)
  let openImagePickerAsync = async () => {
    // getting image access permission
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access gallery is required 😶");
      return;
    }

    // If permission granted then pick image from gallery
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    setPickedImage({ localUri: pickerResult.uri });
  };

  let ImageShareCompatibility = async () => {
    // checking the device sharing compatibility
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh No, sharing isn't available on your platform 😡`);
      return;
    }
    // If compatibile then ask user the mode of sharing
    await Sharing.shareAsync(pickedImage.localUri);
  };

  // Image sharing mode selection component
  if (pickedImage !== null) {
    return (
      <View style={styles.share_container}>
        <Image source={{ uri: pickedImage.localUri }} style={styles.thumbnail} />
        <TouchableOpacity onPress={ImageShareCompatibility} style={styles.share_btn}>
          <Text style={{ fontSize: 18, fontFamily: "Roboto", color: "#F2F3E8", fontWeight: "bold" }}>
            Share this photo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.share_btn}>
          <Text style={{ fontSize: 18, fontFamily: "Roboto", color: "#F2F3E8", fontWeight: "bold" }}>
            Dont like this Image
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Image sharing home component
  // This instructs to pick a image from gallery
  return (
    <View style={styles.share_container}>
      <Image source={sampleImage} style={styles.sample_image} />
      <Text style={styles.instruction}>Click below to select an Image and share</Text>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.btn}>
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
    height: "80%",
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
    marginTop: 30,
  },
  share_btn: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
    width: 240,
    alignItems: "center",
  },
  thumbnail: {
    width: 300,
    height: 300,
    alignItems: "center",
    borderRadius: 10,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
