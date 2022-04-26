import React, {useEffect, useState} from 'react';

import {
    ActivityIndicator,
    ScrollView,
    StyleSheet, Text, useWindowDimensions, View,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import CityAttractionsFiltered from "./CityAttractionsFiltered";


const CityAttractions = ({navigation, route}) => {

    const [currentLocation, setCurrentLocation] = useState();
    const [isLoading, setIsLoading] = useState(true);

    let cityId = route.params.cityId;

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'displayAllAttractions', title: 'Wszystkie'},
        {key: 'displayMonumentTypeAttractions', title: 'Zabytki'},
        {key: 'displayFoodTypeAttractions', title: 'Jedzenie'},
        {key: 's', title: 'Noclegi'},
        {key: 'd', title: 'Galerie'},
    ]);

    useEffect(() => {
        getCurrentLocation()
    }, [cityId])

    function getCurrentLocation() {
        setIsLoading(true);
        return Geolocation.getCurrentPosition(
            (position) => {
                setCurrentLocation({latitude: position.coords.latitude, longitude: position.coords.longitude});
                setIsLoading(false)
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

    function displayAllAttractions() {
        if (!isLoading) {
            return <CityAttractionsFiltered currentLocation={currentLocation}
                                            navigation={navigation} type={"all"} cityId={cityId}/>
        } else {
            return <ActivityIndicator size="large" color="#485683"/>
        }
    }

    function displayMonumentTypeAttractions() {
        if (!isLoading) {
            return <CityAttractionsFiltered currentLocation={currentLocation}
                                            navigation={navigation} type={"monument"} cityId={cityId}/>
        } else {
            return <ActivityIndicator size="large" color="#485683"/>
        }
    }

    function displayFoodTypeAttractions() {
        if (!isLoading) {
            return <CityAttractionsFiltered currentLocation={currentLocation}
                                            navigation={navigation} type={"food"} cityId={cityId}/>
        } else {
            return <ActivityIndicator size="large" color="#485683"/>
        }
    }

    const renderScene = SceneMap({
        displayAllAttractions: displayAllAttractions,
        displayMonumentTypeAttractions: displayMonumentTypeAttractions,
        displayFoodTypeAttractions: displayFoodTypeAttractions,
        s: displayFoodTypeAttractions,
        d: displayFoodTypeAttractions,
    });

    const renderTabBar = props => (
        <View>
            <View style={styles.city_choice_screen_title_container}><Text
                style={styles.city_choice_screen_title_text}>Atrakcje</Text>
            </View>
            <ScrollView horizontal={true}>
                <TabBar
                    {...props}
                    indicatorStyle={{backgroundColor: '#ff8c00'}}
                    style={styles.city_attractions_tab_bar}
                />
            </ScrollView>
        </View>
    );

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
        />
    );
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
    city_attractions_tab_bar: {
        backgroundColor: '#485683',
        marginBottom: 5,
        fontFamily: 'helvetica-rounded-bold',
        elevation: 0,
    }
})

export default CityAttractions;
