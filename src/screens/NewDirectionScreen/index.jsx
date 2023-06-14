import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";


import { savePlace } from "../../store/place.slice";
import styles from "./style"
import { ImageSelector } from "../../components";


const NewDirectionScreen = ({ navigation }) => {

    const [text, setText] = useState("")
    const [image, setImage] = useState(null)

    const dispatch = useDispatch()


    const onHandlerChangeText = (textValue) => {
        setText(textValue)
    }
    const onHandlerSubmit = () => {
        dispatch(savePlace({title: text, image})).unwrap()
        navigation.navigate("Places")
    }
    const onImage = (imageUri) => {
        setImage(imageUri)
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
                <ImageSelector onImage={onImage} />
            </View>
        </ScrollView>
    )
}

export default NewDirectionScreen