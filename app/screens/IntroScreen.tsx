import { Text, Image, StyleSheet } from "react-native";

function IntroScreen() {

  return (
    <>
      <Text style={style.welcome}>Welcome to Temar Lije</Text>
      <Image style={style.image} source={require("@/assets/images/partial-react-logo.png")} />
    </>
  );
}
const style = StyleSheet.create({
  welcome: {
    margin: 20,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 26
  },
  image: {
    position: "absolute",
    bottom: 0,
    left: 0
  }
})
export default IntroScreen;
