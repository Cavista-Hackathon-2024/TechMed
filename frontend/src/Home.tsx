import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Button, Touchable, TouchableOpacity, Alert } from "react-native";
import { navigate } from "./core/rootNavigation";
import React, { useEffect, useState } from "react";
import { LatLng, LeafletView, LeafletWebViewEvents, LeafletWebViewMessage, MapMarker } from "react-native-leaflet-maps";
import * as Location from 'expo-location';
import Ionicons from '@expo/vector-icons/Ionicons';

import { DEFAULT_LOCATIONS, DEFAULT_SHAPES } from './data';
import { stylesMap } from './styles';
import { LatLngObject, TAction, TState } from './types';
export default function Home() {

    let [coordinate, setCoordinate] = useState({
        lat: 6.6059,
        lng: 3.3411,
    })
    // let navigation = useNavigation()
    const [zoom, setZoom] = React.useState(15);
    const [locations, setLocations] = React.useState<Array<MapMarker>>([]);
    let markers = [{ id: "user", icon: '📍', position: coordinate }]
    // ()=>(<Ionicons name={"pin"} size={5} color={"blue"} />)
    const centerToCoordinate = React.useCallback(() => {
        setCoordinate({
            lat: 38.895,
            lng: -77.0366,
        });
    }, []);

    const zoomIn = () => {
        setZoom(zoom + 1);
    };

    const zoomOut = () => {
        setZoom(zoom - 1);
    };

    const deleteMarker = (id: string) => {
        const _locations = locations.filter((location) => location.id !== id);
        setLocations(_locations);
    };

    const addMarker = (position?: LatLng) => {
        if (!position) return;
        setLocations([
            ...locations,
            {
                id: (Math.random() * 1000).toString(),
                position,
                icon: '👻',
            },
        ]);
    };

    // const onMessageReceived = (message: LeafletWebViewMessage) => {
    //     switch (message.event) {
    //         case LeafletWebViewEvents.ON_MAP_MARKER_CLICKED:
    //             if (state.deleteMode) {
    //                 if (message?.payload?.mapMarkerID) {
    //                     return deleteMarker(message?.payload?.mapMarkerID);
    //                 }
    //             }

    //             Alert.alert(
    //                 `Map Marker Touched, ID: ${message?.payload?.mapMarkerID || 'unknown'
    //                 }`
    //             );
    //             break;

    //         case LeafletWebViewEvents.ON_MAP_TOUCHED:
    //             if (state.addMode) {
    //                 return addMarker(message?.payload?.touchLatLng);
    //             }
    //             const position: LatLngObject = message?.payload
    //                 ?.touchLatLng as LatLngObject;

    //             Alert.alert(`Map Touched at:`, `${position.lat}, ${position.lng}`);
    //             break;

    //         default:
    //         // console.log('App received', message);
    //     }
    // };

    const commands = [
        {
            title: '📍',
            backgroundColor: '#D2D5DD',
            onPress: centerToCoordinate,
        },
        {
            title: '🔎+',
            backgroundColor: '#D2D5DD',
            onPress: zoomIn,
        },
        {
            title: '🔎-',
            backgroundColor: '#D2D5DD',
            onPress: zoomOut,
        },
        // {
        //     title: '📍+',
        //     backgroundColor: state.addMode ? '#B8BACF' : '#D2D5DD',
        //     onPress: () => dispatch({ type: 'addMarker' }),
        // },
        // {
        //     title: '📍-',
        //     backgroundColor: state.deleteMode ? '#B8BACF' : '#D2D5DD',
        //     onPress: () => dispatch({ type: 'deleteMarker' }),
        // },
    ];
    // 

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                // setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({ accuracy: 5 });
            let { coords: { latitude: lat, longitude: lng } } = location
            let coord = { lat, lng };
            setCoordinate(coord);
            console.log(location);
        })();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <LeafletView
                // onMessageReceived={onMessageReceived}
                mapMarkers={markers}
                mapCenterPosition={coordinate}
                mapShapes={DEFAULT_SHAPES}
                doDebug={false}
                zoom={zoom}
                zoomControl={false}
            // ownPositionMarker={{
            //     position: coordinate,
            //     icon: "",
            //     size: [24, 24],
            //     animation: {
            //         type: AnimationType.BOUNCE,
            //         duration: 0.5,
            //         delay: 0,
            //         iterationCount: INFINITE_ANIMATION_ITERATIONS
            //     }
            // }}
            />
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
