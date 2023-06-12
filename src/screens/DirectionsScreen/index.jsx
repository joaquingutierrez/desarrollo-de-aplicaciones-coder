import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style"
import { DirectionItem } from "../../components";


const DirectionsScreen = ({ navigation }) => {

    const places = useSelector((state) => state.place.places)

    const onHandlerSelect = (id) => {
        navigation.navigate("DirectionDetail", {directionId: id})
    }

    const renderItem = ({item}) => <DirectionItem {...item} onSelect={onHandlerSelect}/>
    const keyExtractor = (item) => item.id

    return (
        <FlatList
            data = {places}
            style = {styles.container}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    )
}

export default DirectionsScreen