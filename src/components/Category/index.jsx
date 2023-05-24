import { TouchableOpacity, Button, View } from "react-native";
import React from "react";
import styles from "./style"
import CustomText from "../CustomText";

const Category = ({ title, textWhite }) => {



    return (
        <TouchableOpacity style={styles.container}>
            <CustomText myCustomText={title} textWhite={textWhite} />
        </TouchableOpacity>
    )
}

export default Category