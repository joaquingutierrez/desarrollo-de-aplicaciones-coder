import { View, Alert } from 'react-native';
import { styles } from "./style"
import { useState, useRef } from 'react';
import { Input } from './components';
import { InGame } from "./screens"




export default function App() {

    const [inGame, setInGame] = useState(false)
    const numberChousen = useRef(null)


    const handleOnChangeText = (value) => {
        numberChousen.current = Number(value)
    }

    const handleButton = () => {
        if (typeof numberChousen.current !== "number") {
            return Alert.alert("Not a number", "Please, put a number", [
                {
                    text: "Sorry"
                }
            ])
        }
        if (numberChousen.current < 1 || numberChousen.current > 99) {
            return Alert.alert("Not a valid number", "Please, put a number between 1 and 99", [
                {
                    text: "Accept"
                }
            ])
        }
        Alert.alert("Start the game", "Do you want to play with the number: ", [
            {
                text: "Cancel",
            },
            {
                text: "Start",
                onPress: () => {
                    setInGame(true)
                }
            }
        ])
    }

    return (
        <View style={styles.container}>
            {
                !inGame ?
                    <Input placeHolder="Add a number..." buttonTitle="Confirm" handleButton={handleButton} handleOnChangeText={handleOnChangeText} />
                    :
                    <InGame />
            }

        </View>
    );
}


