import { FlatList } from "react-native"
import EventItem from "./EventItem/index"
import {styles} from "./styles"

const Events = ({eventList}) => {

    const renderItem = ({item}) => {
        return (
            <EventItem item={item}/>
        )
    }

    return (
        <FlatList 
            style={styles.listContainer}
            data={eventList}
            renderItem={renderItem}
            const keyExtractor = {(item) => item.id}
        />
    )
}

export default Events