import React, {useEffect, useState} from 'react';

import {
    ActivityIndicator,
    ScrollView,
    StyleSheet, Text, View,
} from 'react-native';
import CityOptionButton from "./CityOptionButton";
import axios from "axios";
import Geolocation from 'react-native-geolocation-service';
import {getPreciseDistance} from "geolib";


const CityChoice = ({navigation}) => {

    const [cities, setCities] = useState([]);
    const [currentLocation, setCurrentLocation] = useState()

    useEffect(() => {
        getCurrentLocation()
    }, [])

    function getCurrentLocation() {
        Geolocation.getCurrentPosition(
            (position) => {
                getCities({latitude: position.coords.latitude, longitude: position.coords.longitude});
                setCurrentLocation({latitude: position.coords.latitude, longitude: position.coords.longitude});
            },
            (error) => {
                console.warn(error.message);
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000
            }
        )
    }

    function getCities(currentLocation) {
        axios.get(`http://10.0.2.2:3001/api/cities`).then((response) => {
            setCities(response.data.sort((a, b) => (getPreciseDistance(currentLocation, {
                latitude: a.coordinates.lat,
                longitude: a.coordinates.lon
            }) > getPreciseDistance(currentLocation, {
                latitude: b.coordinates.lat,
                longitude: b.coordinates.lon
            })) ? 1 : -1))
        });
    }

    if (cities.length !== 0) {
        return (
            <ScrollView>
                <View style={styles.city_choice_screen_title_container}><Text
                    style={styles.city_choice_screen_title_text}>Miasto</Text>
                </View>
                {cities.map((city, index) => {
                    return (
                        <CityOptionButton navigation={navigation} key={city.name + index} id={city._id}
                                          distance={'25km'} name={city.name} coordinates={city.coordinates}
                                          image={city.image} currentLocation={currentLocation}/>)
                })}
            </ScrollView>
        );
    } else {
        return <ActivityIndicator size="large" color="#485683"/>
    }
};

const styles = StyleSheet.create({
    city_choice_screen_title_container: {
        padding: 20,
    },
    city_choice_screen_title_text: {
        margin: 'auto',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'helvetica-rounded-bold',
    },
});

export default CityChoice;
