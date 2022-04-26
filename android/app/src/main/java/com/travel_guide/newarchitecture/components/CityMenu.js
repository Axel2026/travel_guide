import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CityMenu = ({navigation, route}) => {

    let cityId = route.params.cityId;
    let currentLocation = route.params.currentLocation;

    function navigateToAllAttractions(){
        navigation.navigate('CityAttractions', {cityId: cityId})
    }

    function navigateToFilteredAttractions(type){
        navigation.navigate('CityAttractionsFiltered', {cityId: cityId, currentLocation: currentLocation, type: type, navigation: navigation})
    }

    return (
        <View>
            <View style={styles.city_menu_screen_title_container}><Text
                style={styles.city_menu_screen_title_text}>Menu</Text>
            </View>
            <ScrollView>
                <View style={styles.city_menu_buttons_container}>
                    <TouchableOpacity style={styles.city_menu_button_left} onPress={() => navigateToAllAttractions()}><Text style={styles.city_menu_button_text}>Wszystkie atrakcje</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.city_menu_button_right}><Text style={styles.city_menu_button_text}>Najpopularniejsze</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.city_menu_button_left}><Text style={styles.city_menu_button_text}>Jak dojechać</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.city_menu_button_right} onPress={() => navigateToFilteredAttractions('food')}><Text style={styles.city_menu_button_text}>Restauracje i bary</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.city_menu_button_left} onPress={() => navigateToFilteredAttractions('monument')}><Text style={styles.city_menu_button_text}>Zabytki</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.city_menu_button_right} onPress={() => navigateToFilteredAttractions('accommodation')}><Text style={styles.city_menu_button_text}>Noclegi</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.city_menu_button_left} onPress={() => navigateToFilteredAttractions('store')}><Text style={styles.city_menu_button_text}>Sklepy i galerie</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.city_menu_button_right} onPress={() => navigateToFilteredAttractions('other')}><Text style={styles.city_menu_button_text}>Inne</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </View>)
}

const styles = StyleSheet.create({
    city_menu_buttons_container:{
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingTop: '5%',
        paddingBottom: '5%',
    },
    city_menu_button_left:{
        width: '45%',
        height: 145,
        backgroundColor: '#485683',
        borderRadius: 8,
        margin: 5,
        justifyContent: 'center',
        borderRightWidth: 3,
        borderColor: '#ff8c00',
    },
    city_menu_button_right:{
        width: '45%',
        height: 145,
        backgroundColor: '#485683',
        borderRadius: 8,
        margin: 5,
        justifyContent: 'center',
        borderLeftWidth: 3,
        borderColor: '#ff8c00',
    },
    city_menu_button_text:{
        color: "white",
        fontFamily: 'helvetica-rounded-bold',
        fontSize: 18,
        textAlign: 'center'
    },
    city_menu_screen_title_container:{
        paddingTop: 20,
    },
    city_menu_screen_title_text:{
        margin: 'auto',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'helvetica-rounded-bold',
    }
});

export default CityMenu;
