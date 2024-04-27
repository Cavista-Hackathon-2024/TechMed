import React, { useEffect, useRef, useState } from 'react';
import MapView, { MapMarker, MapCallout } from 'react-native-maps';
import { Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Location from 'expo-location';
import { LoadingModal } from "react-native-loading-modal";
import { Formik } from 'formik';
import Button from './components/Button';
import Input, { DropDown, SearchDropDown } from './components/Input';
import Text, { MinText, SubText, TitleText } from './components/Text';
import Checkbox from 'expo-checkbox';
import Modal from './components/Modal';
import { colours } from './core/style';
import { getHospitals } from './services/hospital_services';

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
export default function App() {
    const map = useRef<MapView>()
    const [isShowingAdvanceOptions, setIsShowingAdvanceOptions] = useState(false);
    const [modal, setModal] = useState<"info" | "loading">('info')
    const [loading, setLoading] = useState(false)
    const [hospitals, setHospitals] = useState(sampleHospitals);
    let [coordinate, setCoordinate] = useState({
        latitude: 6.6059,
        longitude: 3.3411,
    })

    useEffect(() => {
        // map?.current.animateToRegion?.({ ...coordinate, latitudeDelta: 0.1, longitudeDelta: 0.1 })
    }, [coordinate])

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                // setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({ accuracy: 5 });
            let { coords: { latitude, longitude } } = location
            let coord = { latitude, longitude };
            setCoordinate(coord);
            console.log(location);
        })();
    }, []);

    const markers = hospitals.map((h, index) => ({
        id: index,
        coordinates: {
            latitude: h.latitude,
            longitude: h.longitude
        },
        title: h.name,
        info: h.address,
        recommended: h.recommended
    }))

    const editComplexList = (item: string, list: string[], method: "add" | "remove") => {
        if (method == "add") {
            if (list.includes(item)) {
                return list
            } else {
                return ([...list, item])
            }
        } else {
            let lId = list.findIndex((it) => (item == it))
            list.splice(lId, 1)
            return (list)
        }
    }

    const getMarkers = () => {

    }
    return (
        <View style={styles.container}>
            {/* {(Platform.OS !== 'web') && <MapView
                ref={map}
                style={styles.map}
                zoomEnabled={true}
                initialRegion={{
                    latitude: 6.601838,
                    longitude: 3.351486,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                    // the lesser the delta the more zoomed in
                }}
                showsUserLocation={true}
                followsUserLocation={true}
            >
                {markers.map((marker) => {
                    // let statusColor = this.parseStatus(marker)
                    return (
                        <MapMarker
                            key={marker.id}
                            coordinate={{
                                latitude: marker.coordinates.latitude,
                                longitude: marker.coordinates.longitude
                            }}
                            title={marker.title}
                            description={marker.info}
                        >
                            <Ionicons name={"location"} size={40} color={marker.recommended ? "red" : "#a3a19b"} />
                            <MapCallout
                                onPress={() => {
                                    console.log("feel")
                                    // navigate('Details', { station: marker })
                                }}>
                            </MapCallout>
                        </MapMarker>
                    )
                })}
            </MapView>
            } */}
            <Modal visible={modal == "info"} >
                <View className='max-h-4/5 w-4/5 p-10 flex flex-col justify-evenly items-stretch bg-BACKGROUND rounded-md'>
                    <TitleText className='!text-left'>Patient Information</TitleText>
                    <Formik
                        initialValues={{
                            age: 18,
                            gender: 'MALE',
                            isPregnant: false,
                            injuries: ["broken bones"],
                            comorbidities: ["hypertension"],
                            facilities_required: [],
                            specialties_required: [],
                            GCS: 15,
                            triage_code: "UNKNOWN",
                            specialties: [],
                            facilities: [],
                        }}
                        onSubmit={values => {
                            // console.log(values)
                            getHospitals(values)
                        }}
                        validator={() => ({})}
                    >

                        {({ handleChange, handleBlur, handleSubmit, setFieldValue, values }) => (
                            <>
                                <ScrollView className='h-5/6'>
                                    <Text>Basic Info</Text>
                                    {(Platform.OS == 'web') && <View className='flex flex-row row-btw gap-2'>
                                        <Input placeholder='Age' onChangeText={(text) => setFieldValue("age", text)} />
                                        <DropDown items={genders}
                                            selectedValue={values.gender}
                                            onValueChange={(itemValue, itemIndex) => {
                                                setFieldValue("gender", itemValue)
                                            }} />
                                    </View>}
                                    {(Platform.OS !== 'web') &&
                                        <View style={{ height: 90, marginBottom: 45 }}>
                                            <Input placeholder='Age' onChangeText={(text) => setFieldValue("age", text)} />
                                            <DropDown items={genders}
                                                selectedValue={values.gender}
                                                onValueChange={(itemValue, itemIndex) => {
                                                    setFieldValue("gender", itemValue)
                                                }} />
                                        </View>}
                                    {(values.gender == "FEMALE") && <View className='flex flex-row justify-end items-center gap-1 mb-2'>
                                        <Text>Is she pregnant?</Text>
                                        <Checkbox value={values.isPregnant} onValueChange={(value) => setFieldValue("isPregnant", value)} />
                                    </View>}

                                    <Text>Emergencies</Text>
                                    <SearchDropDown
                                        data={emergencies}
                                        onSelect={(item) => setFieldValue("injuries", editComplexList(item, values.injuries, "add"))}
                                        onClear={(item) => setFieldValue("injuries", editComplexList(item, values.injuries, "remove"))}
                                        selected={values.injuries}
                                        placeholder='What is the emergency?'
                                    />

                                    <Text>Comorbidities</Text>
                                    <SearchDropDown
                                        data={comorbidities}
                                        onSelect={(item) => setFieldValue("comorbidities", editComplexList(item, values.comorbidities, "add"))}
                                        onClear={(item) => setFieldValue("comorbidities", editComplexList(item, values.comorbidities, "remove"))}
                                        selected={values.comorbidities}
                                        placeholder='Any comorbidities?'
                                    />

                                    <TouchableOpacity className='flex-row justify-center items-center gap-1'
                                        onPress={() => setIsShowingAdvanceOptions((value) => !value)}>
                                        <SubText className='text-center'>Advanced Options</SubText>
                                        <Ionicons name={isShowingAdvanceOptions ? "chevron-up" : "chevron-down"} size={20} color="red" />
                                    </TouchableOpacity>
                                    {isShowingAdvanceOptions && <View>
                                        {(Platform.OS == 'web') && <View className='flex flex-row row-btw gap-2'>
                                            <Input placeholder='G.C.S.' onChangeText={(text) => setFieldValue("GCS", text)} />
                                            <DropDown items={triage_levels}
                                                selectedValue={values.triage_code}
                                                onValueChange={(itemValue, itemIndex) => {
                                                    setFieldValue("triage_code", itemValue)
                                                }} />
                                        </View>}
                                        {(Platform.OS !== 'web') &&
                                            <View style={{ height: 90, marginBottom: 45 }}>
                                                <Input placeholder='G.C.S.' onChangeText={(text) => setFieldValue("GCS", text)} />
                                                <DropDown items={triage_levels}
                                                    selectedValue={values.triage_code}
                                                    onValueChange={(itemValue, itemIndex) => {
                                                        setFieldValue("triage_code", itemValue)
                                                    }} />
                                            </View>}
                                        <Text>Specialties</Text>
                                        <SearchDropDown
                                            data={specialties}
                                            onSelect={(item) => setFieldValue("specialties", editComplexList(item, values.specialties, "add"))}
                                            onClear={(item) => setFieldValue("specialties", editComplexList(item, values.specialties, "remove"))}
                                            selected={values.specialties}
                                            placeholder='Enter required specialties?'
                                        />
                                        <Text>Facility required</Text>
                                        <SearchDropDown
                                            data={facilities}
                                            onSelect={(item) => setFieldValue("facilities", editComplexList(item, values.facilities, "add"))}
                                            onClear={(item) => setFieldValue("facilities", editComplexList(item, values.facilities, "remove"))}
                                            selected={values.facilities}
                                            placeholder='Enter required facilities?'
                                        />
                                    </View>}
                                </ScrollView>
                                <Button onPress={() => handleSubmit()} title='Get Hospitals' />
                            </>
                        )}
                    </Formik>
                    {/* <Text className='text-SECONDARY text-center'>Login</Text> */}
                </View>
            </Modal>

            {/* <LoadingModal modalVisible={loading} task={"loading data"} /> */}
            <TouchableOpacity style={styles.FAB}>
                <Ionicons name={"call"} size={25} color={colours.BACKGROUND} />
                {/* <Text>Ambulance</Text> */}
            </TouchableOpacity>
        </View>
    );
}
const genders = [
    { value: "MALE", label: "Male" },
    { value: "FEMALE", label: "Female" }
]

const triage_levels = [
    { value: "UNKNOWN", label: "Unknown" },
    { value: "GREEN", label: "Green" },
    { value: "YELLOW", label: "Yellow" },
    { value: "RED", label: "Red" },
]

const emergencies = [
    "broken bone",
    "loss of consciousness",
    "pregnant and in labour",
    "burns",
    "car crash"
]

const comorbidities = [
    "hypertension",
    "diabetes",
    "sickle cell disease",
    "chronic kidney disease"
]

const specialties = [
    "orthopaedic surgeon",
    "obstetrician",
]
const facilities = [
    "O2",
    "dialysis",
    "radiography",
    "laboratory"
]

const styles = StyleSheet.create({
    FAB: {
        position: "absolute",
        right: 20,
        bottom: 20,
        backgroundColor: "red",
        padding: 15,
        borderRadius: 50,
    },
    container: {
        flex: 1,
        backgroundColor: 'grey'
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

const sampleHospitals = [
    {
        name: "Lagos University Teaching Hospital (LUTH)",
        address: "Idi-Araba, Lagos",
        latitude: 6.5244,
        longitude: 3.3792,
        specialties: ["General Medicine", "Cardiology", "Oncology", "Pediatrics", "Obstetrics and Gynecology"],
        recommended: true
    },
    {
        name: "Lagos State University Teaching Hospital (LASUTH)",
        address: "Ikeja, Lagos",
        latitude: 6.6059,
        longitude: 3.3411,
        specialties: ["General Surgery", "Neurosurgery", "Orthopedics", "Urology", "Ophthalmology"],
        recommended: false
    },
    {
        name: "Reddington Hospital",
        address: "Victoria Island, Lagos",
        latitude: 6.4351,
        longitude: 3.4235,
        specialties: ["Cardiology", "Oncology", "Gastroenterology", "Radiology", "Plastic Surgery"],
        recommended: true
    },
    {
        name: "Gbagada General Hospital",
        address: "Gbagada, Lagos",
        latitude: 6.5614,
        longitude: 3.3778,
        specialties: ["General Medicine", "Pediatrics", "Obstetrics and Gynecology", "Accident and Emergency"],
        recommended: false
    },
    {
        name: "Ikorodu General Hospital",
        address: "Ikorodu, Lagos",
        latitude: 6.6167,
        longitude: 3.5167,
        specialties: ["General Medicine", "General Surgery", "Orthopedics", "Pediatrics", "Accident and Emergency"],
        recommended: false
    },
    {
        name: "Lagoon Hospitals",
        address: "Apapa, Lagos",
        latitude: 6.4444,
        longitude: 3.3833,
        specialties: ["General Medicine", "Cardiology", "Oncology", "Neurology", "Orthopedics"],
        recommended: false
    },
    {
        name: "Clinix Health",
        address: "Lekki, Lagos",
        latitude: 6.4333,
        longitude: 3.5333,
        specialties: ["General Surgery", "Urology", "Gynecology", "Pediatrics", "Dermatology"],
        recommended: false
    },
    {
        name: "Evercare Hospital",
        address: "Lekki, Lagos",
        latitude: 6.4389,
        longitude: 3.5306,
        specialties: ["Cardiology", "Oncology", "Neurosurgery", "Radiology", "Plastic Surgery"],
        recommended: true
    },
    {
        name: "St. Nicholas Hospital",
        address: "Lagos Island, Lagos",
        latitude: 6.4444,
        longitude: 3.4167,
        specialties: ["General Medicine", "Gastroenterology", "Ophthalmology", "Dentistry", "Physiotherapy"],
        recommended: true
    },
    {
        name: "Vedic Lifecare Hospital",
        address: "Ikeja, Lagos",
        latitude: 6.6059,
        longitude: 3.3411,
        specialties: ["General Surgery", "Orthopedics", "Gynecology", "Pediatrics", "Accident and Emergency"],
        recommended: false
    },
    {
        name: "Euracare Multi-Specialist Hospital",
        address: "Victoria Island, Lagos",
        latitude: 6.4351,
        longitude: 3.4235,
        specialties: ["Cardiology", "Oncology", "Neurosurgery", "Orthopedics", "Ophthalmology"],
        recommended: true
    },
    {
        name: "Noor Specialist Hospital",
        address: "Lekki, Lagos",
        latitude: 6.4417,
        longitude: 3.5306,
        specialties: ["General Medicine", "Gastroenterology", "Nephrology", "Urology", "Dermatology"],
        recommended: true
    },
    {
        name: "Reddington Hospital",
        address: "Victoria Island, Lagos",
        latitude: 6.4351,
        longitude: 3.4235,
        specialties: ["Cardiology", "Oncology", "Gastroenterology", "Radiology", "Plastic Surgery"],
        recommended: true
    },
    {
        name: "Duchess International Hospital",
        address: "Ikeja, Lagos",
        latitude: 6.6059,
        longitude: 3.3411,
        specialties: ["General Surgery", "Gynecology", "Pediatrics", "Accident and Emergency", "Radiology"],
        recommended: false
    },
    {
        name: "Avon Medical Practice",
        address: "Ikoyi, Lagos",
        latitude: 6.4444,
        longitude: 3.4333,
        specialties: ["General Medicine", "Pediatrics", "Obstetrics and Gynecology", "Dermatology", "Physiotherapy"],
        recommended: true
    },
    {
        name: "Lagoon Hospitals Ikoyi",
        address: "Ikoyi, Lagos",
        latitude: 6.4444,
        longitude: 3.4333,
        specialties: ["Cardiology", "Oncology", "Neurosurgery", "Orthopedics", "Ophthalmology"],
        recommended: false
    },
    {
        name: "Clinix Health Lekki",
        address: "Lekki, Lagos",
        latitude: 6.4333,
        longitude: 3.5333,
        specialties: ["General Surgery", "Urology", "Gynecology", "Pediatrics", "Dermatology"],
        recommended: false
    },
    {
        name: "Evercare Hospital Lekki",
        address: "Lekki, Lagos",
        latitude: 6.4389,
        longitude: 3.5306,
        specialties: ["Cardiology", "Oncology", "Neurosurgery", "Radiology", "Plastic Surgery"],
        recommended: true
    },
    {
        name: "St. Nicholas Hospital Lagos Island",
        address: "Lagos Island, Lagos",
        latitude: 6.4444,
        longitude: 3.4167,
        specialties: ["General Medicine", "Gastroenterology", "Ophthalmology", "Dentistry", "Physiotherapy"],
        recommended: true
    },
    {
        name: "Vedic Lifecare Hospital Ikeja",
        address: "Ikeja, Lagos",
        latitude: 6.6059,
        longitude: 3.3411,
        specialties: ["General Surgery", "Orthopedics", "Gynecology", "Pediatrics", "Accident and Emergency"],
        recommended: false
    },
    {
        name: "Euracare Multi-Specialist Hospital Victoria Island",
        address: "Victoria Island, Lagos",
        latitude: 6.4351,
        longitude: 3.4235,
        specialties: ["Cardiology", "Oncology", "Neurosurgery", "Orthopedics", "Ophthalmology"],
        recommended: true
    },
    {
        name: "Noor Specialist Hospital Lekki",
        address: "Lekki, Lagos",
        latitude: 6.4417,
        longitude: 3.5306,
        specialties: ["General Medicine", "Gastroenterology", "Nephrology", "Urology", "Dermatology"],
        recommended: true
    }
];