import React from "react";
import { View } from "react-native";
import { Category } from "../../components"
import styles from "./style"

const CategoryScreen = () => {
    return (
        <View style={styles.container}>
            <Category title="Toys" textWhite={true} />
            <Category title="Puzzle" textWhite={true} />
            <Category title="Video Games" textWhite={true} />
            <Category title="Books" textWhite={true} />
        </View>
    )
}

export default CategoryScreen