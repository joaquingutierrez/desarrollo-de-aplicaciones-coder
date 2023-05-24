import React from "react";
import { View, FlatList } from "react-native";

import styles from "./style"
import { products } from "../../constants/data/products";
import {Products} from "../../components/index"


const ProductListScreen = ({ navigation, route }) => {

    const onSelected = (item) => {
        navigation.navigate("productDetail", {
            productId: item.id,
            name: item.title,
        });
    };

    const productsFiltered = products.filter((product => product.category === route.params.categoryId))

    return (
        <View style={styles.container}>
            <FlatList 
                data={productsFiltered}
                renderItem={({ item }) => <Products item={item} textWhite={true} onSelected={onSelected} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ProductListScreen