import { View, TextInput, Button } from 'react-native';
import { styles } from "./style"
import { useState } from 'react';



export default function App() {
    const [eventList, setEventList] = useState([])
    const [eventText, setEventText] = useState("") 
    
    const handleOnChangeText = (e) => {
        return setEventText(e)
    }
    const handleAddEvent = () => {
        if (eventText.length > 0) {
            setEventList([
                ...eventList,
                eventText
            ])
            setEventText("")
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Nuevo evento...' style={styles.input} onChangeText={handleOnChangeText} value={eventText} />
                <Button title="Agregar" color="#0077B6" onPress={handleAddEvent} />
            </View>
        </View>
    );
}


