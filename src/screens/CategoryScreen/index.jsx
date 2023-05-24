import React from "react";
import { View, Button, FlatList } from "react-native";

import { Category } from "../../components"
import styles from "./style"
import { categories } from "../../constants/data/categories";


const CategoryScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList style={styles.container}
                data={categories}
                renderItem={({item}) => <Category title={item.title} textWhite={true} navigation={navigation} />}
                keyExtractor={item => item.id}
            />
            {/* <Button title="Ir a productos lista" onPress={() => navigation.navigate('productList')} /> */}
        </View>
    )
}

export default CategoryScreen