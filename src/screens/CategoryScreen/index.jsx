import React from "react";
import { View, Button } from "react-native";
import { Category } from "../../components"
import styles from "./style"

const CategoryScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Category title="Toys" textWhite={true} navigation={navigation} />
            <Category title="Puzzle" textWhite={true} navigation={navigation} />
            <Category title="Video Games" textWhite={true} navigation={navigation} />
            <Category title="Books" textWhite={true} navigation={navigation} />
            <Button title="Ir a productos lista" onPress={() => navigation.navigate('productList')} />
        </View>
    )
}

export default CategoryScreen