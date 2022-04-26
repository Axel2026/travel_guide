import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from "./android/app/src/main/java/com/travel_guide/newarchitecture/components/TabNavigation";
import CityChoice from "./android/app/src/main/java/com/travel_guide/newarchitecture/components/CityChoice";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarLabel: "Miasto",
                    tabBarIcon: ({ focused, size }) => {
                        let iconName;
                        if (route.name === 'CityChoice') {
                            iconName = focused
                                ? 'ios-home-outline'
                                : 'ios-home';
                        }
                        return <Ionicons name={iconName} size={size} color={"#ff8c00"}/>;
                    },
                })}
            >
                <Tab.Screen name="TabNavigation" component={TabNavigation} options={{headerShown: false, tabBarItemStyle: { display: 'none', showLabel: false }}} tabBarOptions={{showLabel: false}}/>
                <Tab.Screen name="CityChoice" component={CityChoice} options={{headerShown: false}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
