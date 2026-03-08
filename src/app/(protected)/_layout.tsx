import { AuthContext } from "@/src/context/AuthContext";
import { Stack, Redirect } from "expo-router";
import { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

export default function ProtectedLayout() {
  const authContext = useContext(AuthContext);
  
  // Show loading while checking authentication
  if (authContext.authState?.authenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  
  if (!authContext.authState?.authenticated) {
    return <Redirect href="/login" />;
  } 
  
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
}
