import React from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style"


const DirectionsScreen = ({ navigation }) => {

    const places = useSelector((state) => state.place.places)
    console.warn(places)



    return (
        <View style={styles.container}>
            <Text>Direcciones</Text>
        </View>
    )
}

export default DirectionsScreen