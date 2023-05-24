import React from "react";
import { View, Button, FlatList } from "react-native";

import { Category } from "../../components"
import styles from "./style"
import { categories } from "../../constants/data/categories";


const CategoryScreen = ({ navigation }) => {

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
            {/* <Button title="Ir a productos lista" onPress={() => navigation.navigate('productList')} /> */}
        </View>
    )
}

export default CategoryScreen