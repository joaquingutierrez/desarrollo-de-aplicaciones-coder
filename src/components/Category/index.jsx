import { View } from "react-native";
import React from "react";
import styles from "./style"
import CustomText from "../CustomText";

const Category = ({ title, textWhite }) => {


    return (
        <View style={styles.container}>
            <CustomText myCustomText={title} textWhite={textWhite} />
        </View>
    )
}

export default Category