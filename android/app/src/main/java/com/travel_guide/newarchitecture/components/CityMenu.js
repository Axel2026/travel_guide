import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

const CityMenu = ({navigation, route}) => {

    let cityId = route.params.cityId;
    let currentLocation = route.params.currentLocation;

    function navigateToAllAttractions() {
        navigation.navigate('CityAttractions', {cityId: cityId})
    }

    function navigateToFilteredAttractions(type) {
        navigation.navigate('CityAttractionsFiltered', {
            cityId: cityId,
            currentLocation: currentLocation,
            type: type,
            navigation: navigation
        })
    }

    function navigateToPopularAttractions() {
        navigation.navigate('PopularAttractions', {cityId: cityId, currentLocation: currentLocation})
    }

    function navigateToCityMap() {
        navigation.navigate('CityMap', {cityId: cityId, currentLocation: currentLocation, navigation: navigation})
    }

    return (
        <View>
            <View style={styles.city_menu_screen_title_container}><Text
                style={styles.city_menu_screen_title_text}>Menu</Text>
            </View>
            <ScrollView>
                <View style={styles.city_menu_buttons_container}>
                    <TouchableOpacity style={styles.city_menu_button_left}
                                      onPress={() => navigateToAllAttractions()}><MaterialIcons name={"attractions"}
                                                                                                size={35}
                                                                                                style={styles.city_menu_button_left_icon}/><Text
                        style={styles.city_menu_button_text}>Wszystkie atrakcje</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.city_menu_button_right}
                                      onPress={() => navigateToPopularAttractions()}><SimpleLineIcons name={"badge"}
                                                                                                      size={35}
                                                                                                      style={styles.city_menu_button_left_icon}/><Text
                        style={styles.city_menu_button_text}>Najpopularniejsze</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.city_menu_button_left}
                                      onPress={() => navigateToCityMap()}><FontAwesome name={"road"} size={33}
                                                                                       style={styles.city_menu_button_left_icon}/><Text
                        style={styles.city_menu_button_text}>Jak dotrzeć</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.city_menu_button_right}
                                      onPress={() => navigateToFilteredAttractions('food')}><Ionicons
                        name={"fast-food-sharp"} size={33} style={styles.city_menu_button_left_icon}/><Text
                        style={styles.city_menu_button_text}>Restauracje i bary</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.city_menu_button_left}
                                      onPress={() => navigateToFilteredAttractions('monument')}><FontAwesome5
                        name={"monument"} size={35} style={styles.city_menu_button_left_icon}/><Text
                        style={styles.city_menu_button_text}>Zabytki</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.city_menu_button_right}
                                      onPress={() => navigateToFilteredAttractions('accommodation')}><FontAwesome5
                        name={"bed"} size={35} style={styles.city_menu_button_left_icon}/><Text
                        style={styles.city_menu_button_text}>Noclegi</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.city_menu_button_left}
                                      onPress={() => navigateToFilteredAttractions('store')}><FontAwesome5
                        name={"store"} size={30} style={styles.city_menu_button_left_icon}/><Text
                        style={styles.city_menu_button_text}>Sklepy i galerie</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.city_menu_button_right}
                                      onPress={() => navigateToFilteredAttractions('other')}><Entypo
                        name={"dots-three-horizontal"} size={35} style={styles.city_menu_button_left_icon}/><Text
                        style={styles.city_menu_button_text}>Inne</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </View>)
}

const styles = StyleSheet.create({
    city_menu_buttons_container: {
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingTop: '5%',
        paddingBottom: '10%',
    },
    city_menu_button_left: {
        width: '45%',
        height: 145,
        backgroundColor: '#485683',
        borderRadius: 8,
        margin: 5,
        justifyContent: 'center',
        borderRightWidth: 3,
        borderColor: '#ff8c00',
    },
    city_menu_button_right: {
        width: '45%',
        height: 145,
        backgroundColor: '#485683',
        borderRadius: 8,
        margin: 5,
        justifyContent: 'center',
        borderLeftWidth: 3,
        borderColor: '#ff8c00',
    },
    city_menu_button_text: {
        color: "white",
        fontFamily: 'helvetica-rounded-bold',
        fontSize: 18,
        textAlign: 'center'
    },
    city_menu_screen_title_container: {
        paddingTop: 20,
    },
    city_menu_screen_title_text: {
        margin: 'auto',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'helvetica-rounded-bold',
    },
    city_menu_button_left_icon: {
        width: 35,
        height: 35,
        color: 'white',
        alignSelf: 'center',
        marginTop: -25,
        marginBottom: 5,
    }
});

export default CityMenu;
