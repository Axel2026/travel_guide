import React from 'react';

import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const CityAttractionDetails = ({route}) => {

    const id = route.params.attractionId;
    const name = route.params.attractionName;
    const image = route.params.attractionImage;
    const description = route.params.attractionDescription;
    const attractionDistance = route.params.attractionDistance;

    if (true) {
        return (
            <ScrollView style={styles.attraction_details_screen_container}>
                <View style={styles.attraction_details_image_container}>
                    <Image style={styles.attraction_details_image} source={{uri: image}}
                           alt="attraction_details_image"/>
                </View>
                <View style={styles.attraction_details_title_container}>
                    <Text style={styles.attraction_details_title_text}>
                        {name}
                    </Text>
                </View>
                <View style={styles.attraction_details_distance_container}>
                    <Text style={styles.attraction_details_distance_text}>
                        {attractionDistance}
                    </Text>
                </View>
                <TouchableOpacity style={styles.attraction_details_map_button_container}>
                    <Text style={styles.attraction_details_map_button_text}>
                        Zobacz na mapie
                    </Text>
                </TouchableOpacity>
                <View style={styles.attraction_details_description_container}>
                    <Text style={styles.attraction_details_description_text}>
                        {description}
                    </Text>
                </View>
            </ScrollView>
        );
    } else {
        return (<View></View>);
    }
};

const styles = StyleSheet.create({
    attraction_details_screen_container: {
        padding: 20,
    },
    attraction_details_image_container: {
        color: 'black',
        margin: 'auto',
        fontSize: 25,
        textAlign: 'center',
        borderColor: '#ff8c00',
        borderWidth: 3,
    },
    attraction_details_image: {
        width: '100%',
        height: 200,
    },
    attraction_details_title_container: {
        width: '100%',
        paddingTop: 20,
    },
    attraction_details_title_text: {
        fontSize: 30,
        color: 'black',
        fontFamily: 'helvetica-rounded-bold',
    },
    attraction_details_distance_container: {
        paddingBottom: 20,
    },
    attraction_details_distance_text: {
        fontSize: 20,
        fontFamily: 'Helvetica',
    },
    attraction_details_description_container: {
        width: '100%',
        paddingTop: 30,
        marginBottom: 60,
    },
    attraction_details_description_text: {
        fontSize: 20,
        fontFamily: 'helvetica-rounded-bold',
    },
    attraction_details_map_button_container: {
        backgroundColor: '#ff8c00',
        padding: 15,
        borderRadius: 10,
        width: '80%',
        alignSelf: 'center',
        elevation: 3,
    },
    attraction_details_map_button_text: {
        fontSize: 30,
        color: 'white',
        alignSelf: 'center',
        fontFamily: 'helvetica-rounded-bold',
    },
});

export default CityAttractionDetails;
