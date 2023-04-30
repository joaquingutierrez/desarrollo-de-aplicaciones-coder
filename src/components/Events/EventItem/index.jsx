import { Text, View, Button } from "react-native"
import { styles } from "./styles"

const EventItem = ({ item, handleOnDeleteEvent }) => {

    return (
        <View style={styles.itemContainer}>
            <Text>{item.value}</Text>
            <Button title="Borrar" onPress={()=>handleOnDeleteEvent(item.id)} />
            <Button title="Completada" />
        </View>
    )
}

export default EventItem