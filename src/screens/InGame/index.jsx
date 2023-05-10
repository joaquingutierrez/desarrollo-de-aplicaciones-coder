import { View, Button, Text } from "react-native"
import { useState } from "react"
import { styles } from "./styles"

const InGame = ({ numerChousen }) => {


    let maxNumber = 99
    let minNumber = 1
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * maxNumber + 1))

    const handleLower = () => {
        maxNumber = randomNumber
        const random = Math.foor(Math.random() * maxNumber + 1)
        setRandomNumber(random)
    }
    const handleHigher = () => {

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