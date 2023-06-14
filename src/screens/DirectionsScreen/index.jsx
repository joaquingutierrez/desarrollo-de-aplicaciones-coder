import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style"
import { DirectionItem } from "../../components";
import { getPlaces } from "../../store/place.slice";


const DirectionsScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const places = useSelector((state) => state.place.places)

    const onHandlerSelect = (id) => {
        navigation.navigate("PlaceDetail", { directionId: id })
    }

    useEffect(() => {
        dispatch(getPlaces());
    }, [dispatch]);


    const renderItem = ({ item }) => <DirectionItem {...item} onSelect={() => onHandlerSelect(item.id)} />
    const keyExtractor = (item) => item.id

    return (
        <FlatList
            data={places}
            style={styles.container}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    )
}

export default DirectionsScreen