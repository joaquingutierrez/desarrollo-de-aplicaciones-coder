import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";


import { addPlace } from "../../store/place.slice";
import styles from "./style"


const NewDirectionScreen = ({ navigation }) => {

    const [text, setText] = useState("")

    const dispatch = useDispatch()


    const onHandlerChangeText = (textValue) => {
        setText(textValue)
    }
    const onHandlerSubmit = () => {
        dispatch(addPlace(text))
        /* navigation.navigate("Places") */
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
                <Button title="Agregar Direccion" color="blue" onPress={onHandlerSubmit} />
            </View>
        </ScrollView>
    )
}

export default NewDirectionScreen