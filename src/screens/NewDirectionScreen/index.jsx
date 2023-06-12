import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Category } from "../../components"
import styles from "./style"
import { selectCategory } from "../../store/actions";


const NewDirectionScreen = ({ navigation }) => {

    const [text, setText] = useState("")

    const dispatch = useDispatch()
    const categories = useSelector((state) => state.categories.data)

    const onSelected = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate("productList", {
            //categoryId: item.id,
            name: item.title,
        });
    };

    const onHandlerChangeText = (textValue) => {
        setText(textValue)
    }
    const onHandlerPress = () => {
        console.log(text)
    }


    return (
        <ScrollView style={styles.container}>
            <View>
                <Text>
                    Nombre nueva ubicacion
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre de la ubicacion..."
                    onChangeText={onHandlerChangeText}
                    value={text}
                />
                <Button title="Agregar Direccion" color="blue" onPress={onHandlerPress} />
            </View>
        </ScrollView>
    )
}

export default NewDirectionScreen