
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
    flex: .25,
    backgroundColor: "red",
    alignItems: 'center',
    fontFamily: 'Impact',
    justifyContent: "flex-end"
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    
    
  
}
})
