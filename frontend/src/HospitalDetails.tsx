import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Button, Touchable, TouchableOpacity } from "react-native";
import Text, { MinText, SubText, TitleText } from './components/Text';
import { navigate } from "./core/rootNavigation";
import React, { useState } from "react";
import MapView, { MapCallout, MapMarker } from "react-native-maps";
import { FontAwesome } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { colours } from "./core/style";
// @ts-ignore
import logo from "./assets/images/LASUTH_icon.png"
import { Image } from 'expo-image';
import * as Linking from "expo-linking"

const test_markers = [
    {
        id: "dsxxfghj",
        title: "LUTH",
        info: "recommended",

        coordinates: {
            latitude: 6.51832,
            longitude: 3.39693
        }


    }
]

export default function HospitalDetails({ navigation, route }) {
    // const route = useRoute()
    // let [hospital, setHospital] = useState()
    // route.params?.hospital || 
    let hospital = {
        type: "PUBLIC",
        distance_away: 200.003,
        spaces: 5,
        recommended: true,
        title: "Lagos University Teaching Hospital (LUTH)",
        address: "Ikeja, Lagos",
        latitude: 6.6059,
        longitude: 3.3411,
        specialties: ["General Surgery", "Neurosurgery", "Orthopedics", "Urology", "Ophthalmology"],
    }

    const parseUnits = (units) => {
        return (
            <View className="flex flex-row items-center">
                <Ionicons className="mr-2" name={"call"} size={25} color={colours.POSITIVE} />
                <Text>- Has Plastic Surgery</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <MapView
                // className="border-b-2 border-TEXT"
                style={{ width: "100%", height: "50%" }}
                zoomEnabled={true}
                initialRegion={{
                    latitude: hospital?.latitude,
                    longitude: hospital?.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                    // the lesser the delta the more zoomed in
                }}
                showsUserLocation={true}
                followsUserLocation={true}
                liteMode
            >
                <MapMarker
                    key={"id"}
                    coordinate={{
                        latitude: hospital.latitude,
                        longitude: hospital.longitude
                    }}
                    title={hospital.title}
                    description={hospital.address}
                >
                    <View className='rounded-full p-4' style={{ backgroundColor: hospital.recommended ? "#08991d" : "#787774" }}>
                        <FontAwesome name="hospital-o" size={20} color="white" />
                    </View>
                    <MapCallout
                        onPress={() => {
                            console.log("feel")
                            // navigate('Details', { station: marker })
                        }}>
                    </MapCallout>
                </MapMarker>
            </MapView>

            <View className="flex flex-col px-4 pt-4" style={{ borderTopWidth: 1, borderColor: colours.TEXT }}>
                <View className="flex flex-row justify-between items-center mb-4">
                    <View className="flex flex-1 flex-row gap-1">
                        <Image
                            style={{ width: 60, height: 60 }}
                            source={logo}
                            // placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                        />

                        <View className="flex justify-between flex-1">
                            <Text className="mb-1" bold>{hospital.title}</Text>
                            <SubText bold>1-5 Oba Akinjobi street</SubText>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <FontAwesome name="phone" size={45} color={colours.POSITIVE} onPress={() => Linking.openURL('tel:+2348033909121')} />
                        {/* <Ionicons className="ml-2" name={"call"} size={45} color={colours.POSITIVE} /> */}
                    </TouchableOpacity>
                </View>
                <View className="pl-2">
                    <View>
                        <Text className="!text-white bg-POSITIVE mb-2 mr-auto p-2 px-4 !rounded-2xl" bold >Highly Recomended</Text>
                    </View>

                    <View className="flex flex-row items-center mb-2">
                        <Ionicons className="mr-2" name={"checkmark-circle"} size={25} color={colours.POSITIVE} />
                        <Text>- Has Plastic Surgery</Text>
                    </View>
                    <View className="flex flex-row items-center mb-2">
                        <Ionicons className="mr-2" name={"checkmark-circle"} size={25} color={colours.POSITIVE} />
                        <Text>- Has 2 bed spaces</Text>
                    </View>
                    <View className="flex flex-row items-center mb-2">
                        <Ionicons className="mr-2" name={"checkmark-circle"} size={25} color={colours.POSITIVE} />
                        <Text>- less than 2km away</Text>
                    </View>
                    <Button title="NOTIFY HOSPITAL"/>
                    {/* unit */}
                    {/* ward */}
                    {/* facilities */}
                    {/* distance */}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
    },
});
