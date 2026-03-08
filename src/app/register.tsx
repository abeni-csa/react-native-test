import { useContext, useState } from "react";
import { AuthContext } from "@/src/context/AuthContext";
import { View, Text, TextInput, Alert, ActivityIndicator, KeyboardAvoidingView, StyleSheet, Platform, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function RegisterationPage() {
  const { onRegister, authState } = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // console.log("[+] Auth Context:", { onLogIn, onRegister, authState });

  // Redirect if already authenticated
  if (authState?.authenticated) {
    router.replace("/analytics");
    return null;
  }


  const register = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!onRegister) {
      Alert.alert("Error", "Registration service not available");
      return;
    }

    setIsLoading(true);
    try {
      const result = await onRegister(email, password);
      if (result && result.error) {
        Alert.alert("Registration Failed", result.msg);
      } else {
        Alert.alert("Success", "Registration successful! You can now login.");
      }
    } catch (error) {
      Alert.alert("Error", "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      style={style.container}
    >

      <View style={style.formContaier} >
        <Text style={style.title}>Create Your Account</Text>
        <TextInput
          style={style.input}
          value={email}
          onChangeText={setEmail}
          editable={!isLoading}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="mail address"
        />
        <TextInput
          style={style.input}
          value={password}
          onChangeText={setPassword}
          editable={!isLoading}
          secureTextEntry
          placeholder="password"
        />
        <Pressable
          style={style.button}
          onPress={register}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Text style={style.buttonText}>Login</Text>
          )}
        </Pressable>
        <Pressable
          onPress={() => router.navigate("/login")
          }
        >
          <Text style={style.linkText}>Already have an accoutn? Login</Text>
        </Pressable>

      </View>

    </KeyboardAvoidingView>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  formContaier: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 40,
    textAlign: "center"
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  button: {
    backgroundColor: "#007aff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700"
  },
  linkText: {
    textAlign: "center",
    color:"blue",
    marginTop: 20,
    fontSize: 14
  }
})
