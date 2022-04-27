import React from 'react';
import CityChoice from "./CityChoice";
import CityAttractionDetails from "./CityAttractionDetails";
import CityAttractions from "./CityAttractions";
import CityAttractionsFiltered from "./CityAttractionsFiltered";
import CityMenu from "./CityMenu";
import AttractionMap from "./AttractionMap";
import {createStackNavigator} from "@react-navigation/stack";
import PopularAttractions from "./PopularAttractions";
import CityMap from "./CityMap";

const Stack = createStackNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CityChoice" component={CityChoice} options={{headerShown: false}}/>
            <Stack.Screen name="CityMenu" component={CityMenu}
                          options={{headerShown: false, tabBarItemStyle: {display: 'none'}}}/>
            <Stack.Screen name="CityAttractionDetails" component={CityAttractionDetails}/>
            <Stack.Screen name="AttractionMap" component={AttractionMap}/>
            <Stack.Screen name="CityMap" component={CityMap}/>
            <Stack.Screen name="CityAttractions" component={CityAttractions} options={{headerShown: false}}/>
            <Stack.Screen name="CityAttractionsFiltered" component={CityAttractionsFiltered}/>
            <Stack.Screen name="PopularAttractions" component={PopularAttractions}/>
        </Stack.Navigator>
    );
}

export default StackNavigation;
