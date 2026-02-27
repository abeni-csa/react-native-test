
import { Alert, StyleSheet, Text, Image, Button } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";



export default function RootLayout() {
  const  onButtonPress = () => Alert.alert(

    'Pagination',
    'Did you Like Paginations? ❤❤',
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]
  );
    return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.name}> Temar Lije</Text>
          <Button title="Press Me" onPress={onButtonPress} />
          <Image width={2000} height={100} source={require("../assets/images/react-logo.png")} />
          <Text style={styles.subtitle}>

             Pagination 
             is commonly used in applications that display data in a paginated format, such as search results, product listings, or user records. It helps improve performance and user experience by loading and displaying only a portion of the data at a time, reducing the amount of data transferred and processed.
              Pagination affects every element of an application's performance, from database queries to network load to user experience. However, poorly optimized pagination can also affect all aspects of an application and can lead to slow response times, increased resource utilization, and poor scalability.


             <Text style={{
               color: "red",
               textDecorationLine: "underline"
               
             }}
            onPress={()=> Alert.alert("Text Pressed")}
              >Pagination </Text>Thus, pagination is a critical performance optimization in Postgres when building high-performance applications because it directly affects their efficiency, scalability, and user experience.

To address these challenges, Postgres offers various pagination techniques and optimizations. Let’s review these pagination techniques to see their advantages and limitations </Text>
          <Image width={2000} height={100} source={require("../assets/images/react-logo.png")} />
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#998833',
    fontStyle: 'italic'
  },
  subtitle: {
    fontSize: 16,
    textAlign: "justify",
    color: '#fff',
  }
  
})
