import React, {useEffect, useState} from 'react';
import {getPreciseDistance} from 'geolib';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const CityOptionButton = ({id, name, coordinates, image, navigation, currentLocation}) => {

    const [distance, setDistance] = useState()

    useEffect(() => {
        getDistanceToCity()
    }, [])

    async function getDistanceToCity() {
        let distanceToCityWithoutUnit = getPreciseDistance({
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude
        }, {
            latitude: coordinates.lat,
            longitude: coordinates.lon
        })

        if (distanceToCityWithoutUnit > 1000) {
            setDistance(Math.floor(distanceToCityWithoutUnit / 1000) + " km");
        } else {
            setDistance(distanceToCityWithoutUnit + " m");
        }
    }

    function navigateToCityAttractions() {
        navigation.navigate('CityAttractions', {cityId: id})
    }

    if (distance !== undefined) {
        return (
            <View style={styles.city_option_button_container}>
                <TouchableOpacity style={styles.city_option_button} onPress={navigateToCityAttractions}>
                    <View style={styles.city_option_button_image_container}>
                        <Image style={styles.city_option_button_image} source={{uri: image}} alt="city_thumbnail"/>
                    </View>
                    <View style={styles.city_option_button_distance_container}>
                        <Text style={styles.city_option_button_distance_text}>
                            {distance}
                        </Text>
                    </View>
                    <Text style={styles.city_option_button_text}>
                        {name}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    } else {
        return <View></View>
    }
}

const styles = StyleSheet.create({
    city_option_button_container: {
        display: 'flex',
        flexDirection: 'column',
    },

    city_option_button: {
        borderTopWidth: 3,
        borderColor: '#ff8c00',
        height: 110,
    },

    city_option_button_text: {
        color: 'black',
        fontFamily: 'helvetica-rounded-bold',
        fontSize: 30,
        marginTop: -10,
        paddingBottom: 0,
        paddingLeft: 120,
        paddingRight: 45,
    },

    city_option_button_distance_container: {
        backgroundColor: '#ff8c00',
        borderTopWidth: 1,
        borderColor: '#ff8c00',
        width: 60,
        height: 30,
        borderBottomLeftRadius: 5,
        alignSelf: 'flex-end',
        padding: 4,
    },

    city_option_button_distance_text: {
        color: 'white',
        alignSelf: 'center',
        fontFamily: 'helvetica-rounded-bold',
    },

    city_option_button_image_container: {
        height: 95,
        width: 105,
        borderColor: '#ff8c00',
        borderWidth: 3,
        borderBottomRightRadius: 10,
        position: 'absolute',
    },

    city_option_button_image: {
        height: 90,
        width: 100,
        backgroundColor: 'black',
        borderBottomRightRadius: 10,
    }
});

export default CityOptionButton;
