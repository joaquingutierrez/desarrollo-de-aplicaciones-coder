import { View } from "react-native";
import React from "react";
import styles from "./style"
import CustomText from "../CustomText";

const ProductDetail = ({ item, textWhite, onSelected }) => {


    return (
        <View style={styles.container} onPress={() => onSelected(item)}>
            <CustomText myCustomText={item.title} textWhite={textWhite} />
        </View>
    )
}

export default ProductDetail