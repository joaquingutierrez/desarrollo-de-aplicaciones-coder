import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 50
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 60
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#0077B6",
        width: "60%"
    }
});