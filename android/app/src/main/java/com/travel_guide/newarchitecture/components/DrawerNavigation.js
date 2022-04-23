import React, {useEffect} from 'react';
import CityChoice from "./CityChoice";
import CityOptionButton from "./CityOptionButton";
import {createDrawerNavigator} from "@react-navigation/drawer";
import CityAttractions from "./CityAttractions";
import CityAttractionsOptionButton from "./CityAttractionsOptionButton";
import CityAttractionDetails from "./CityAttractionDetails";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {

    return (
        <Drawer.Navigator initialRouteName="CityChoice" screenOptions={{
            headerShown: false,
            headerTransparent: true
        }}>
            <Drawer.Screen name="CityChoice" component={CityChoice}/>
            <Drawer.Screen name="CityAttractions" component={CityAttractions}/>
            <Drawer.Screen name="CityAttractionsOptionButton" component={CityAttractionsOptionButton}/>
            <Drawer.Screen name="CityAttractionDetails" component={CityAttractionDetails}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;
