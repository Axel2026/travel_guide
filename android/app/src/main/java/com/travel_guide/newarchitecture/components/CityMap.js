import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import axios from "axios";
import {StackActions} from '@react-navigation/native';

const CityMap = ({navigation, route}) => {

    let cityId = route.params.cityId;
    let currentLocation = route.params.currentLocation;

    useEffect(() => {
        getCityDetails()
    }, [])

    function getCityDetails() {
        axios.get(`https://travel-guide-app-server.herokuapp.com/api/cities/${cityId}`)
            .then((response) => {
                navigateToMap(response.data[0])
            })
            .catch((error) => {
                console.warn(error)
            })
    }


    function navigateToMap(city) {
        navigation.dispatch(
            StackActions.replace('AttractionMap', {
                attractionCoordinates: city.coordinates,
                attractionName: city.name,
                attractionAddress: '',
                attractionPhoneNumber: '',
                attractionWebsite: '',
                currentLocation: currentLocation,
            })
        );
    }

    return (
        <ActivityIndicator size="large" color="#485683"/>
    );
}

export default CityMap;
