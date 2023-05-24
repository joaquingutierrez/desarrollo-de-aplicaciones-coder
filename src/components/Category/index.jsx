import { TouchableOpacity, Button, View } from "react-native";
import React from "react";
import styles from "./style"
import CustomText from "../CustomText";

const Category = ({ item, textWhite, onSelected }) => {



    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
            <CustomText myCustomText={item.title} textWhite={textWhite} />
        </TouchableOpacity>
    )
}

export default Category