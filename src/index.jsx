import { View, Alert, ActivityIndicator } from 'react-native';
import { styles } from "./style"
import { useState, useRef } from 'react';
import { Input } from './components';
import { InGame, WinScreen } from "./screens"
import { useFonts } from 'expo-font';
import {colors} from "./constants/theme"



export default function App() {

    const [inGame, setInGame] = useState(false)
    const numberChousen = useRef(null)
    const [win, setWin] = useState(false)
    const points = useRef(100)


    const [loaded] = useFonts({
        "Dancing-Script-Regular": require("../assets/fonts/static/DancingScript-Regular.ttf"),
        "Dancing-Script-Bold": require("../assets/fonts/static/DancingScript-Bold.ttf")
    })
    if (!loaded) {
        return <ActivityIndicator style={styles.container} size="large" color={colors.primary}/>
    }

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
        Alert.alert("Start the game", "Do you want to play with the number: " + numberChousen.current, [
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

    const winTheGame = (number) => {
        points.current -= 1
        if (number === numberChousen.current) {
            setWin(true)
        }
    }


    const restartGame = () => {
        setWin(false)
        setInGame(false)
        points.current = 100
        numberChousen.current = null
    }

    return (
        <View style={styles.container}>
            {
                !inGame ?
                    <Input color={colors.tertiary} placeHolder="Add a number..." buttonTitle="Confirm" handleButton={handleButton} handleOnChangeText={handleOnChangeText} />
                    :
                    !win ?
                        <InGame winTheGame={winTheGame} numberChousen={numberChousen} />
                        :
                        <WinScreen points={points} restartGame={restartGame} />
            }

        </View>
    );
}


