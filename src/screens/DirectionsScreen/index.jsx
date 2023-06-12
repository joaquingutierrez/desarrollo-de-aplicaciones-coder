import React from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Category } from "../../components"
import styles from "./style"
import { selectCategory } from "../../store/actions";


const DirectionsScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const categories = useSelector((state) => state.categories.data)

    const onSelected = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate("productList", {
            //categoryId: item.id,
            name: item.title,
        });
    };



    return (
        <View style={styles.container}>
            <Text>Direcciones</Text>
        </View>
    )
}

export default DirectionsScreen