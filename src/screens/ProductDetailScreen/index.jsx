import React from "react";
import { View, FlatList } from "react-native";

import styles from "./style"
import { products } from "../../constants/data/products";
import { ProductDetail } from "../../components/index"


const ProductListScreen = ({ navigation, route }) => {

    const onSelected = (item) => {
        navigation.navigate("productDetail", {
            productId: item.id,
            name: item.title,
        });
    };

    const productFiltered = products.find((product => product.id === route.params.productId))

    return (
        <View style={styles.container}>
            <ProductDetail item={productFiltered} textWhite={true} onSelected={() => onSelected(productFiltered)} />
        </View>
    )
}

export default ProductListScreen