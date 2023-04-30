import { Text, View } from "react-native"
import { styles } from "./styles"

const EventItem = ({item}) => {


    return (
        <View style={styles.itemContainer}>
            <Text>{item.value}</Text>
        </View>
    )
}

export default EventItem