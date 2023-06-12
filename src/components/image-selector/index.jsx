import { View, Button, Text, Image, Alert } from "react-native"
import { requestCameraPermissionsAsync, launchCameraAsync } from "expo-image-picker"

import { styles } from "./style"
import { useState } from "react"

const ImageSelector = ({ onImage }) => {

    const [pickedUrl, setPickedUrl] = useState(null)

    const verifyPermissions = async () => {
        const { status } = await requestCameraPermissionsAsync()

        if (status !== "granted") {
            Alert.alert(
                "Permiso denegado", "Necesita permisos para usar la cámara", [{ text: "OK" }]
            )
            return false
        }
        return true
    }

    const onHandlerTakeImage = async () => {
        const isCameraPermission = await verifyPermissions()
        if (!isCameraPermission) return

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.7
        })

        setPickedUrl(image.uri)

        onImage(image.uri)
    }


    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUrl ? (
                    <Text>No hay imagen seleccionada</Text>
                ) : (
                    <Image style={styles.image} source={{ uri: pickedUrl }} />
                )}
            </View>
            <Button title="Tomar Foto" color="blue" onPress={onHandlerTakeImage} />
        </View>
    )
}

export default ImageSelector