import React from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { Category } from "../../components"
import styles from "./style"


const CategoryScreen = ({ navigation }) => {
    const categories = useSelector((state) => state.categories.data)
    const onSelected = (item) => {
        navigation.navigate("productList", {
            categoryId: item.id,
            name: item.title,
        });
    };



    return (
        <View style={styles.container}>
            <FlatList style={styles.container}
                data={categories}
                renderItem={({ item }) => <Category item={item} textWhite={true} onSelected={onSelected} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default CategoryScreen