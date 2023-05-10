import { View, Button, Text } from "react-native"
import { useState, useRef } from "react"
import { styles } from "./styles"

const InGame = ({ numerChousen }) => {

    const maxNumber = useRef(99)
    const minNumber = useRef(1)

    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * maxNumber.current + minNumber.current))

    const handleLower = () => {
        maxNumber.current = randomNumber
        const random = Math.floor(Math.random() * maxNumber.current + minNumber.current)
        setRandomNumber(random)
    }
    const handleHigher = () => {
        minNumber.current = randomNumber
        const random = Math.floor((Math.random() * (maxNumber.current-minNumber.current + 1))+ minNumber.current)
        setRandomNumber(random)
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