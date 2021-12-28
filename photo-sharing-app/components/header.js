import { StyleSheet, Text, View, Image } from "react-native";
import logo from "../assets/vk-round-logo_transparent.png";

// Importing google montserrat font
// import { useFonts, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

// Header container
// Contains Logo and Title
export default function Header() {
  // Loading the google fonts uphold
  //   let [fontsLoaded] = useFonts({
  //     Montserrat_700Bold,
  //   });

  return (
    <View style={styles.title_container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Image Sharable</Text>
    </View>
  );
}

// Header component stylesheet
const styles = StyleSheet.create({
  title_container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#9D2DD2",
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
    // marginTop: 50,
  },
  title: {
    color: "#F2F3E8",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    // marginTop: 30,
    marginLeft: 10,
  },
});
