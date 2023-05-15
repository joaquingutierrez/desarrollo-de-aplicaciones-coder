import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./style"

const ProductListScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Product Detail Screen</Text>
            <Button title="Go to Product Detail" onPress={() => navigation.navigate('productDetail')} />
        </View>
    )
}

export default ProductListScreen