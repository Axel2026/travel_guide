import React, {useEffect, useState} from 'react';

import {
    ScrollView,
    StyleSheet, Text, useWindowDimensions, View,
} from 'react-native';
import axios from "axios";
import CityAttractionsOptionButton from "./CityAttractionsOptionButton";
import {getPreciseDistance} from "geolib";
import Geolocation from "@react-native-community/geolocation";
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';


const CityAttractions = ({navigation, route}) => {

    const [cityAttractions, setCityAttractions] = useState();
    const [currentLocation, setCurrentLocation] = useState()

    let cityId = route.params.cityId;

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'displayAllAttractions', title: 'Wszystkie'},
        {key: 'displayMonumentTypeAttractions', title: 'Zabytki'},
        {key: 'displayFoodTypeAttractions', title: 'Jedzenie'},
    ]);

    useEffect(() => {
        getCurrentLocation()
    }, [cityId])

    function getCurrentLocation() {
        return Geolocation.getCurrentPosition(
            (position) => {
                getAttractions({latitude: position.coords.latitude, longitude: position.coords.longitude})
                setCurrentLocation({latitude: position.coords.latitude, longitude: position.coords.longitude});
            },
            (error) => {
                console.warn(error.message);
            },
        )
    }

    function getAttractions(currentLocation) {
        axios.get(`http://10.0.2.2:3001/api/cities/attractions/city/${cityId}`).then((response) => {
            setCityAttractions(response.data.sort((a, b) => (getPreciseDistance(currentLocation, {
                latitude: a.coordinates.lat,
                longitude: a.coordinates.lon
            }) > getPreciseDistance(currentLocation, {
                latitude: b.coordinates.lat,
                longitude: b.coordinates.lon
            })) ? 1 : -1));
        });
    }

    function displayAllAttractions() {
        return (
            <View>
                {cityAttractions.map((attraction, index) => {
                    return (
                        <CityAttractionsOptionButton key={attraction.name + index} id={attraction._id} distance={'5km'}
                                                     name={attraction.name} coordinates={attraction.coordinates}
                                                     image={attraction.image} description={attraction.description}
                                                     type={attraction.type} navigation={navigation}
                                                     currentLocation={currentLocation}/>)
                })}
            </View>)
    }

    function displayMonumentTypeAttractions() {
        return (
            <View>
                {cityAttractions.map((attraction, index) => {
                    if (attraction.type === "monument") {
                        return (
                            <CityAttractionsOptionButton key={attraction.name + index} id={attraction._id}
                                                         distance={'5km'}
                                                         name={attraction.name} coordinates={attraction.coordinates}
                                                         image={attraction.image} description={attraction.description}
                                                         type={attraction.type} navigation={navigation}
                                                         currentLocation={currentLocation}/>)
                    }
                })}
            </View>)
    }

    function displayFoodTypeAttractions() {
        return (
            <View>
                {cityAttractions.map((attraction, index) => {
                    if (attraction.type === "food") {
                        return (
                            <CityAttractionsOptionButton key={attraction.name + index} id={attraction._id}
                                                         distance={'5km'}
                                                         name={attraction.name} coordinates={attraction.coordinates}
                                                         image={attraction.image} description={attraction.description}
                                                         type={attraction.type} navigation={navigation}
                                                         currentLocation={currentLocation}/>)
                    }
                })}
            </View>)
    }

    const renderScene = SceneMap({
        displayAllAttractions: displayAllAttractions,
        displayMonumentTypeAttractions: displayMonumentTypeAttractions,
        displayFoodTypeAttractions: displayFoodTypeAttractions,
    });

    const renderTabBar = props => (
        <View>
            <View style={styles.city_choice_screen_title_container}><Text
                style={styles.city_choice_screen_title_text}>Atrakcje</Text>
            </View>
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            style={ styles.city_attractions_tab_bar}
        />
        </View>
    );

    if (cityAttractions !== undefined) {
        return (
            /*            <ScrollView>
                        <View>*/
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width: layout.width}}
            />
            /*            </View>
                        </ScrollView>*/
        );
    } else {
        return (<View></View>);
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
    city_attractions_tab_bar:{
        backgroundColor: '#485683',
        marginBottom: 5,
        fontFamily: 'helvetica-rounded-bold',
        elevation: 0,
    }
})

export default CityAttractions;
