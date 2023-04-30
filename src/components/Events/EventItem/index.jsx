import { Text, View, Button } from "react-native"
import { styles } from "./styles"
import { useState } from "react"

const EventItem = ({ item, handleOnDeleteEvent }) => {

    const [taskComplete, setTaskComplete] = useState(false)

    const handleChangeColor = (id) => {
        setTaskComplete(!taskComplete)
    }

    return (
        <View style={[styles.itemContainer, taskComplete ? styles.itemContainerComplete : styles.itemContainerIncomplete]}>
            <Text style={styles.text}>{item.value}</Text>
            <View>
                <Button title="Borrar" onPress={() => handleOnDeleteEvent(item.id)} />
                <Button title="Completada" onPress={()=>handleChangeColor(item.id)} />
            </View>
        </View>
    )
}

export default EventItem