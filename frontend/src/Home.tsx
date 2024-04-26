import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Button, Touchable, TouchableOpacity } from "react-native";
import { navigate } from "./core/rootNavigation";
import React from "react";

export default function Home() {

    // let navigation = useNavigation()
    return (
        <View className="bg-black" style={styles.container}>
            <Text className="mb-4">Home</Text>
            {/* <StatusBar style="auto" /> */}
            <TouchableOpacity className="bg-white p-4" onPress={() => navigate("Hospital Detail")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
