import React from "react";
import { View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Category } from "../../components"
import styles from "./style"
import { selectCategory } from "../../store/actions";


const CategoryScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const categories = useSelector((state) => state.categories.data)

    const onSelected = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate("productList", {
            //categoryId: item.id,
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