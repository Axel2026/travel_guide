import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from "./android/app/src/main/java/com/travel_guide/newarchitecture/components/DrawerNavigation";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                headerTransparent: true
            }}>
                <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
