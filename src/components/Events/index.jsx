import { FlatList } from "react-native"
import EventItem from "./EventItem/index"
import {styles} from "./styles"

const Events = ({eventList, handleOnDeleteEvent}) => {

    const renderItem = ({item}) => {
        return (
            <EventItem item={item} handleOnDeleteEvent={handleOnDeleteEvent} />
        )
    }

    return (
        <FlatList 
            style={styles.listContainer}
            data={eventList}
            renderItem={renderItem}
            keyExtractor = {(item) => item.id}
        />
    )
}

export default Events