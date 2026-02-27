
import { useState } from "react";
import { Text, View, Button, Modal} from "react-native";

export default function RootLayout() {

const [modalVisible, setModalVisible] = useState(false);
  const  [stateValue, setValueState] = useState(666)
  const IncremetValue = () => setValueState(prevStateValue => prevStateValue + 10);
  const DecremetValue = () => setValueState(prevStateValue => prevStateValue - 10);
  return (
    <View style={{
      backgroundColor:"blue",
      flex:1,
      justifyContent:"center"
    }}>
      <Text style={{
        fontSize:100,
        color: "red"
        
      }}>
        {stateValue}
        </Text>
      <Button title="+" onPress={IncremetValue} />
      <Button title="-" onPress={DecremetValue} />
      <Button title="Modal Show" onPress={() => setModalVisible(preModalState => !preModalState)} />
      <Modal animationType="slide" visible={modalVisible}>

      <Button title="Modal Hide" onPress={() => setModalVisible(preModalState => !preModalState)} />
      </Modal>
     
      
    </View>
  );
}


// import { Alert, StyleSheet, ScrollView, Text, Image, Button, TouchableOpacity, Pressable} from "react-native";
// import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

// export default function RootLayout() {
//   const  onButtonPress = () => Alert.alert(

//     'Pagination',
//     'Did you Like Paginations? ❤❤',
//     [
//       {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
//       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
//       {text: 'OK', onPress: () => console.log('OK Pressed')},
//     ]
//   );
//     return (
//     <SafeAreaProvider>
//         <SafeAreaView style={styles.container}>
//           <ScrollView showsVerticalScrollIndicator={true}>
//           <Text style={styles.name}> Temar Lije</Text>
//           <Button title="Press Me" onPress={onButtonPress} />

          
//           <Pressable onPress={onButtonPress}>
//           <Image
//             width={2000}
//             height={100}
//             blurRadius={15}
//             // style={styles.pic_one}
//             source={require("../assets/images/react-logo.png")
//           } />
//           </Pressable>
//           <Text style={styles.subtitle}>
//              Pagination 
//              is commonly used in applications that display data in a paginated format, such as search results, product listings, or user records. It helps improve performance and user experience by loading and displaying only a portion of the data at a time, reducing the amount of data transferred and processed.
//               Pagination affects every element of an application's performance, from database queries to network load to user experience. However, poorly optimized pagination can also affect all aspects of an application and can lead to slow response times, increased resource utilization, and poor scalability.</Text>
//             <TouchableOpacity>
//           <Image
//              width={2000}
//              height={100}
//              source={require("../assets/images/react-logo.png")} />
//           </TouchableOpacity>

//           <Pressable onPress={onButtonPress}>
//           <Image
//             width={2000}
//             height={100}
//             blurRadius={15}
//             // style={styles.pic_one}
//             source={require("../assets/images/react-logo.png")
//           } />
//           </Pressable>
//           <Pressable onPress={onButtonPress}>
//           <Image
//             width={2000}
//             height={100}
//             blurRadius={5}
//             // style={styles.pic_one}
//             source={require("../assets/images/react-logo.png")
//           } />
//           </Pressable>
//           <Pressable onPress={onButtonPress}>
//           <Image
//             width={2000}
//             height={100}
//             blurRadius={15}
//             // style={styles.pic_one}
//             source={require("../assets/images/react-logo.png")
//           } />
//           </Pressable>
//           <Pressable onPress={onButtonPress}>
//           <Image
//             width={2000}
//             height={100}
//             blurRadius={15}
//             // style={styles.pic_one}
//             source={require("../assets/images/react-logo.png")
//           } />
//           </Pressable>
//           <Pressable onPress={onButtonPress}>
//           <Image
//             width={2000}
//             height={100}
//             blurRadius={15}
//             // style={styles.pic_one}
//             source={require("../assets/images/react-logo.png")
//           } />
//           </Pressable>
//           <Pressable onPress={onButtonPress}>
//           <Image
//             width={2000}
//             height={100}
//             // style={styles.pic_one}
//             source={require("../assets/images/react-logo.png")
//           } />
//           </Pressable>
//         </ScrollView>
//         </SafeAreaView>
//       </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#998833',
//     fontStyle: 'italic'
//   },
//   subtitle: {
//     fontSize: 16,
//     textAlign: "justify",
//     color: '#000',
//   } 
  
// })
