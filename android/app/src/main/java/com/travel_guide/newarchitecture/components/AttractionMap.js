import React, {useCallback, useEffect} from 'react';
import {Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";


const AttractionMap = ({navigation, route}) => {

    const attractionCoordinates = route.params.attractionCoordinates;
    const attractionAddress = route.params.attractionAddress;
    const attractionPhoneNumber = route.params.attractionPhoneNumber;
    const attractionWebsite = route.params.attractionWebsite;
    const attractionName = route.params.attractionName;
    const currentLocation = route.params.currentLocation;

    const openAttractionWebsite = useCallback(async () => {
        if (attractionWebsite) {
            await Linking.openURL("http://www." + attractionWebsite);
        }
    })

    useEffect(() => {
        navigation.setOptions({
            title: attractionName,
        })
    }, [])

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: attractionCoordinates.lat,
                    longitude: attractionCoordinates.lon,
                    latitudeDelta: 0.0043,
                    longitudeDelta: 0.0034
                }}
            >
                <MapViewDirections
                    origin={currentLocation}
                    destination={{latitude: attractionCoordinates.lat, longitude: attractionCoordinates.lon}}
                    apikey={"AIzaSyAIvDDItN2JLD551zj0VRgFIE4IrGpax6M"}
                    strokeWidth={8}
                    strokeColor="#485683"
                />
                <Marker coordinate={currentLocation}/>
                <Marker coordinate={{latitude: attractionCoordinates.lat, longitude: attractionCoordinates.lon}}>
                    <MapView.Callout onPress={() => openAttractionWebsite()}>
                        <TouchableOpacity style={styles.attraction_map_contact_info_container}
                                          underlayColor='#ff8c00'>
                            <ScrollView>
                                <Text style={styles.attraction_map_contact_info_text_address}>
                                    {attractionAddress}
                                </Text>
                                <Text style={styles.attraction_map_contact_info_text}>
                                    {attractionPhoneNumber}
                                </Text>
                                <Text style={styles.attraction_map_contact_info_text}>
                                    {attractionWebsite}
                                </Text>
                            </ScrollView>
                        </TouchableOpacity>
                    </MapView.Callout>
                </Marker>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
            ...StyleSheet.absoluteFillObject,
            height: "100%",
        },

        map: {
            ...StyleSheet.absoluteFillObject,
        },
        attraction_map_contact_info_container: {
            elevation: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            width: 150,
            height: 150,
            borderRadius: 5,
            padding: 15,
            flexDirection: 'column',
        },
        attraction_map_contact_info_text_address: {
            fontFamily: 'Helvetica-Bold',
            fontSize: 15,
            color: "black",
            borderRadius: 5,
            flexWrap: 'wrap',
            marginBottom: 3,
            alignSelf: 'flex-start',
        },
        attraction_map_contact_info_text: {
            fontFamily: 'Helvetica',
            fontSize: 15,
            color: "black",
            borderRadius: 5,
            flexWrap: 'wrap',
            marginBottom: 3,
            alignSelf: 'flex-start',
        }
    }
)

export default AttractionMap;
