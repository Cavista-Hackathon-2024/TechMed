import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Button } from "react-native";
import { navigate } from "./core/rootNavigation";
import React from "react";

export default function Home() {

    // let navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <StatusBar style="auto" />
            <Button title="move" onPress={() => navigate("Hospital Detail")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
