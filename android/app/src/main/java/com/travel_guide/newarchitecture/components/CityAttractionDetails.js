import React, {useEffect} from 'react';

import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const CityAttractionDetails = ({navigation, route}) => {

    const name = route.params.attractionName;
    const image = route.params.attractionImage;
    const description = route.params.attractionDescription;
    const attractionDistance = route.params.attractionDistance;
    const attractionCoordinates = route.params.attractionCoordinates;
    const attractionAddress = route.params.attractionAddress;
    const attractionPhoneNumber = route.params.attractionPhoneNumber;
    const attractionWebsite = route.params.attractionWebsite;
    const currentLocation = route.params.currentLocation;

    useEffect(() => {
        navigation.setOptions({
            title: name
        })
    }, [])

    function navigateToMap() {
        navigation.navigate('AttractionMap', {
            attractionCoordinates: attractionCoordinates,
            attractionName: name,
            attractionAddress: attractionAddress,
            attractionPhoneNumber: attractionPhoneNumber,
            attractionWebsite: attractionWebsite,
            currentLocation: currentLocation,
        })
    }

    return (
        <ScrollView style={styles.attraction_details_screen_container}>
            <View style={styles.attraction_details_image_container}>
                <Image style={styles.attraction_details_image} source={{uri: image}}
                       alt="attraction_details_image"/>
            </View>
            <View style={styles.attraction_details_title_container}>
                <Text style={styles.attraction_details_title_text}>
                    {name}
                </Text>
            </View>
            <View style={styles.attraction_details_distance_container}>
                <Text style={styles.attraction_details_distance_text}>
                    {attractionDistance}
                </Text>
            </View>
            <TouchableOpacity style={styles.attraction_details_map_button_container} onPress={() => navigateToMap()}>
                <Text style={styles.attraction_details_map_button_text}>
                    Zobacz na mapie
                </Text>
            </TouchableOpacity>
            <View style={styles.attraction_details_description_container}>
                <Text style={styles.attraction_details_description_text}>
                    {description}
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    attraction_details_screen_container: {
        padding: 20,
    },
    attraction_details_image_container: {
        color: 'black',
        margin: 'auto',
        fontSize: 25,
        textAlign: 'center',
        borderColor: '#ff8c00',
        borderWidth: 3,
    },
    attraction_details_image: {
        width: '100%',
        height: 200,
    },
    attraction_details_title_container: {
        width: '100%',
        paddingTop: 20,
    },
    attraction_details_title_text: {
        fontSize: 30,
        color: 'black',
        fontFamily: 'helvetica-rounded-bold',
    },
    attraction_details_distance_container: {
        paddingBottom: 20,
    },
    attraction_details_distance_text: {
        fontSize: 20,
        fontFamily: 'Helvetica',
    },
    attraction_details_description_container: {
        width: '100%',
        paddingTop: 30,
        marginBottom: 60,
    },
    attraction_details_description_text: {
        fontSize: 20,
        fontFamily: 'helvetica-rounded-bold',
    },
    attraction_details_map_button_container: {
        backgroundColor: '#ff8c00',
        padding: 12,
        borderRadius: 10,
        width: '80%',
        alignSelf: 'center',
        elevation: 3,
    },
    attraction_details_map_button_text: {
        fontSize: 30,
        color: 'white',
        alignSelf: 'center',
        fontFamily: 'helvetica-rounded-bold',
    },
});

export default CityAttractionDetails;
