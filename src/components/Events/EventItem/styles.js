import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        marginVertical: 12,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    itemContainerComplete: {
        backgroundColor: "#0077B6"
    },
    itemContainerIncomplete: {
        backgroundColor: "#FF3900"
    },
    text: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "500",
        alignSelf: "center"
    }
})