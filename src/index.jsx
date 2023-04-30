import { View } from 'react-native';
import { styles } from "./style"
import { useState } from 'react';
import { Input, Events } from './components';



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
                {
                    value: eventText,
                    id: Math.random()
                }
            ])
            setEventText("")
        }
    }
    const handleOnDeleteEvent = (id) => {
        setEventList(eventList.filter((item) => item.id !== id))
    }
    const handleCompleteTask = (id) => {
        
    }

    return (
        <View style={styles.container}>
            <Input handleAddEvent={handleAddEvent} handleOnChangeText={handleOnChangeText} value={eventText} />
            <Events eventList={eventList} handleOnDeleteEvent={handleOnDeleteEvent} />
        </View>
    );
}


