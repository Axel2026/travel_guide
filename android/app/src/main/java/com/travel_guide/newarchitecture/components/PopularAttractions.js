import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import axios from "axios";
import CityAttractionsOptionButton from "./CityAttractionsOptionButton";


const PopularAttractions = ({navigation, route}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [cityAttractions, setCityAttractions] = useState([])

    let cityId = route.params.cityId;
    let currentLocation = route.params.currentLocation;

    useEffect(() => {
        navigation.setOptions({
            title: "Najpopularniejsze",
        })
        getAttractionsOrderedByPopularity()
    }, [])

    function getAttractionsOrderedByPopularity() {
        axios.get(`https://travel-guide-app-server.herokuapp.com/api/cities/attractions/city/${cityId}`).then((response) => {
            setCityAttractions(response.data.sort((a, b) => (a.clicks < b.clicks) ? 1 : -1));
            setIsLoading(false);
        });
    }

    if (!isLoading) {
        return (
            <ScrollView>
                {cityAttractions.map((attraction, index) => {
                    return <CityAttractionsOptionButton key={attraction.name + index} id={attraction._id}
                                                        name={attraction.name} coordinates={attraction.coordinates}
                                                        image={attraction.image} navigation={navigation}
                                                        description={attraction.description} type={attraction.type}
                                                        currentLocation={currentLocation} address={attraction.address}
                                                        phoneNumber={attraction.phone_number}
                                                        website={attraction.website}/>
                })}
            </ScrollView>
        );
    } else {
        return <ActivityIndicator size="large" color="#485683"/>
    }
}

export default PopularAttractions;
