import React, {useEffect, useState} from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getPreciseDistance} from "geolib";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


const CityAttractionsOptionButton = ({id, name, coordinates, image, navigation, description, type, currentLocation, address, phoneNumber, website}) => {

    const [distance, setDistance] = useState()


    useEffect(() => {
        getDistanceToAttraction()
    }, [])


    function navigateToAttractionDetails() {
        navigation.navigate('CityAttractionDetails', {
            attractionId: id,
            attractionName: name,
            attractionImage: image,
            attractionDescription: description,
            attractionDistance: distance,
            attractionCoordinates: coordinates,
            attractionAddress: address,
            attractionPhoneNumber: phoneNumber,
            attractionWebsite: website,
            currentLocation: currentLocation,
        })
    }

    function getAttractionTypeIcon() {
        switch (type) {
            case "monument":
                return <MaterialCommunityIcons style={styles.city_attractions_option_button_icon} name="church"
                                               size={35}/>;

            case 'food':
                return <MaterialCommunityIcons style={styles.city_attractions_option_button_icon} name="food"
                                               size={35}/>;

            default:
                return <MaterialCommunityIcons style={styles.city_attractions_option_button_icon}
                                               name="alert-decagram"
                                               size={35}/>;
        }
    }

    async function getDistanceToAttraction() {
        let distanceToAttractionWithoutUnit = getPreciseDistance({
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude
        }, {
            latitude: coordinates.lat,
            longitude: coordinates.lon
        })
        if (distanceToAttractionWithoutUnit > 1000) {
            setDistance(Math.floor(distanceToAttractionWithoutUnit / 1000) + " km");
        } else {
            setDistance(distanceToAttractionWithoutUnit + " m");
        }
    }

    return (
        <View style={styles.city_attractions_option_button_container}>
            <TouchableOpacity style={styles.city_attractions_option_button} onPress={navigateToAttractionDetails}>
                <View style={styles.city_attractions_option_button_image_container}>
                    <Image style={styles.city_attractions_option_button_image} source={{uri: image}}
                           alt="city_thumbnail"/>
                </View>
                <View style={styles.city_attractions_option_button_distance_container}>
                    <Text style={styles.city_attractions_option_button_distance_text}>
                        {distance}
                    </Text>
                </View>
                <View style={styles.city_attractions_option_button_icon_container}>
                    {getAttractionTypeIcon()}
                </View>
                <Text style={styles.city_attractions_option_button_text}>
                    {name}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    city_attractions_option_button_container: {
        display: 'flex',
        flexDirection: 'column',
    },

    city_attractions_option_button: {
        borderTopWidth: 3,
        borderColor: '#ff8c00',
        height: 110,
    },

    city_attractions_option_button_text: {
        color: 'black',
        fontFamily: 'helvetica-rounded-bold',
        fontSize: 25,
        marginTop: -15,
        paddingBottom: 0,
        paddingLeft: 120,
        paddingRight: 60,
    },

    city_attractions_option_button_distance_container: {
        backgroundColor: '#ff8c00',
        width: 60,
        height: 30,
        borderBottomLeftRadius: 5,
        alignSelf: 'flex-end',
        padding: 4,
    },

    city_attractions_option_button_distance_text: {
        color: 'white',
        alignSelf: 'center',
        fontFamily: 'helvetica-rounded-bold',
    },

    city_attractions_option_button_image_container: {
        height: 95,
        width: 105,
        borderColor: '#ff8c00',
        borderWidth: 3,
        borderBottomRightRadius: 10,
        position: 'absolute',
    },

    city_attractions_option_button_image: {
        height: 90,
        width: 100,
        backgroundColor: 'black',
        borderBottomRightRadius: 10,
    },
    city_attractions_option_button_icon_container: {
        width: 38,
        height: 38,
        backgroundColor: '#485683',
        alignSelf: 'flex-end',
        position: 'absolute',
        marginTop: 60,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    city_attractions_option_button_icon: {
        alignSelf: 'center',
        color: 'white'
    }
});

export default CityAttractionsOptionButton;
