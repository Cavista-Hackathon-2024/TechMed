import "@expo/metro-runtime";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, navigate } from './src/core/rootNavigation';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Home';
import HospitalDetails from './src/HospitalDetails';
import Wards from "./src/Tabs/Wards";
import Incoming from "./src/Tabs/Incoming";


type RootStackParamList = {
  Home: undefined,
  "Hospital Detail": undefined,
  "Admin Home": undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hospital Detail" component={HospitalDetails} />
        <Stack.Screen name="Admin Home" component={TabLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabLayout = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Wards" component={Wards} />
      <Tab.Screen name="Incoming" component={Incoming} />
    </Tab.Navigator>
  )
}