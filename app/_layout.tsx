
 import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
 import IntroScreen from "./screens/IntroScreen";

 export default function AppIntryPoint() {
   return (
     <SafeAreaProvider>
       
      <SafeAreaView style={{flex:1, backgroundColor:"aqua"}} >
        <IntroScreen />
      </SafeAreaView>
     </SafeAreaProvider>
   );
   
 }
