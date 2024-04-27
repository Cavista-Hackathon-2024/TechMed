import "@expo/metro-runtime";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, navigate } from './src/core/rootNavigation';
import { useFonts } from 'expo-font';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import "./src/global.css"


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

// export default function Home() {

//   // let navigation = useNavigation()
//   return (
//       <View style={styles.container}>
//           <Text className="mb-4">Home</Text>
//           <StatusBar style="auto" />
//           {/* <Button title="move" onPress={() => navigate("Hospital Detail")} /> */}
//       </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//   },
// });



export default function App() {
  const [fontsLoaded] = useFonts({
    'Inria Sans': require('./assets/fonts/InriaSans-Regular.ttf'),
    'Inria Sans Bold': require('./assets/fonts/InriaSans-Bold.ttf'),
  });
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
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