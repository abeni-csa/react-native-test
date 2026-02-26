
import { View, StyleSheet, Text } from "react-native";



export default function RootLayout() {
  return (
        <View style={styles.container}>
          <Text style={styles.name}> Abenezer The Greate</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  }
})
