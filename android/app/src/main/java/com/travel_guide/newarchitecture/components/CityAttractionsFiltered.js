import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import CityAttractionsOptionButton from "./CityAttractionsOptionButton";
import axios from "axios";
import {getPreciseDistance} from "geolib";

const CityAttractionsFiltered = (props) => {

    const [cityAttractions, setCityAttractions] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const currentLocation = props.currentLocation !== undefined ? props.currentLocation : props.route.params.currentLocation;
    const type = props.type !== undefined ? props.type : props.route.params.type
    const cityId = props.cityId !== undefined ? props.cityId : props.route.params.cityId
    const navigation = props.navigation !== undefined ? props.navigation : props.route.params.navigation

    useEffect(() => {
        navigation.setOptions({
            title: getScreenTitle(),
        })
        getAttractions();
    }, [cityId])

    function getAttractions() {
        axios.get(`http://10.0.2.2:3001/api/cities/attractions/city/${cityId}`).then((response) => {
            setCityAttractions(response.data.sort((a, b) => (getPreciseDistance(currentLocation, {
                latitude: a.coordinates.lat,
                longitude: a.coordinates.lon
            }) > getPreciseDistance(currentLocation, {
                latitude: b.coordinates.lat,
                longitude: b.coordinates.lon
            })) ? 1 : -1));
            setIsLoading(false);
        });
    }

    function getScreenTitle() {
        switch (type) {
            case "food":
                return "Restauracje i bary";
            case "monument":
                return "Zabytki";
            case "accommodation":
                return "Noclegi";
            case "store":
                return "Sklepy i galerie";
            case "other":
                return "Inne";
            default:
                return "Wszystkie";
        }
    }

    if (!isLoading) {
        return (
            <ScrollView>
                {cityAttractions.map((attraction, index) => {
                    if (attraction.type === type || type === "all") {
                        return (
                            <CityAttractionsOptionButton key={attraction.name + index} id={attraction._id}
                                                         distance={'5km'}
                                                         name={attraction.name} coordinates={attraction.coordinates}
                                                         image={attraction.image}
                                                         description={attraction.description}
                                                         type={attraction.type} address={attraction.address}
                                                         phoneNumber={attraction.phone_number}
                                                         website={attraction.website} navigation={navigation}
                                                         currentLocation={currentLocation}/>)
                    }
                })}
            </ScrollView>)
    } else {
        return <ActivityIndicator size="large" color="#485683"/>
    }

}

export default CityAttractionsFiltered;
