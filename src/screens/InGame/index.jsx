import { View, Button, Text, Alert } from "react-native"
import { useState, useRef } from "react"
import { styles } from "./styles"

const InGame = ({ winTheGame, numberChousen }) => {

    const maxNumber = useRef(99)
    const minNumber = useRef(1)
    let random

    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * maxNumber.current + minNumber.current))

    const handleLower = () => {
        if (randomNumber < numberChousen.current) {
            return Alert.alert("Dont cheat", "", [{ text: "Sorry" }])
        } else {
            maxNumber.current = randomNumber
            const random = Math.floor((Math.random() * (maxNumber.current - minNumber.current + 1)) + minNumber.current)
            winTheGame(random)
            setRandomNumber(random)
        }
    }
    const handleHigher = () => {
        if (randomNumber > numberChousen.current) {
            return Alert.alert("Dont cheat", "", [{ text: "Sorry" }])
        } else {
            minNumber.current = randomNumber
            const random = Math.floor((Math.random() * (maxNumber.current - minNumber.current + 1)) + minNumber.current)
            winTheGame(random)
            setRandomNumber(random)
        }
    }


    return (
        <View style={styles.container}>
            <Text>
                {randomNumber}
            </Text>
            <View style={styles.buttonContainer}>
                <Button title="Lower" onPress={handleLower} />
                <Button title="Higher" onPress={handleHigher} />
            </View>
        </View>
    )
}

export default InGame 