import { View, Button, Text, Image } from "react-native"

import { styles } from "./style"
import { useState } from "react"

const ImageSelector = ({ onImage }) => {

    const [pickedUrl, setPickedUrl] = useState(null)

    const onHandlerTakeImage = () => {

    }


    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUrl ? (
                    <Text>No hay imagen seleccionada</Text>
                ) : (
                    <Image style={styles.image} source={{url: pickedUrl}} />
                )}
            </View>
            <Button title="Tomar Foto" color="blue" onPress={onHandlerTakeImage} />
        </View>
    )
}

export default ImageSelector