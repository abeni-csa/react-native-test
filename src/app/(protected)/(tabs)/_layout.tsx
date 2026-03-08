import { Tabs } from 'expo-router';
import React from 'react';
import CustomNavBar from '../../../components/CustomNavBar';

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function FamilyLayout() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>

        <Tabs screenOptions={{headerShown:false}} tabBar={(props) => <CustomNavBar {...props} />}>
          <Tabs.Screen name='analytics' options={{ title:"Monitor" }} />
          <Tabs.Screen name='fee' options={{ title: "Fee" }} />
          <Tabs.Screen name='index' options={{ title: "Explo" }} />
          <Tabs.Screen name='chat' options={{ title: "Chat" }} />
          <Tabs.Screen name='profile' options={{ title: "Profile" }} />
        </Tabs>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
