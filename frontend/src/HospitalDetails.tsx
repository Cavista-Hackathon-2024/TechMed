import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Button } from "react-native";
import { navigate } from "./core/rootNavigation";
import React from "react";


export default function HospitalDetails() {
    return (
        <View style={styles.container}>
            <Text>Hospital Details</Text>
            <StatusBar style="auto" />
            <Button title="move" onPress={() => navigate("Admin Home")} />

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
