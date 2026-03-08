import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AuthProvider } from "@/src/context/AuthContext";

export default function RootLayout() {

  return (
    <AuthProvider>
      <React.Fragment>
        <StatusBar style="auto" />
        <Stack>
          <Stack.Screen
            name="(protected)"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="student-form"
            options={{
              headerShown: true,
              title: "Student Profile"
            }}
          />
          <Stack.Screen
            options={{
              headerShown: false
            }}
            name="userSelection" />
          <Stack.Screen

            options={{
              headerShown: false
            }}
            name="login" />
          <Stack.Screen

            options={{
              headerShown: false
            }}

            name="register" />
        </Stack>
      </React.Fragment>
    </AuthProvider>
  );
}
