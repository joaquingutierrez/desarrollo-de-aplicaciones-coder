import { StyleSheet } from "react-native";
import {fonts, colors} from "../../constants/theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    cardContainer: {
        backgroundColor: colors.primary,
        paddingVertical: 80,
        width: "100%",
        borderRadius: 40,
        gap: 30
    },
    randomNumber: {
        color: "#fff",
        fontFamily: fonts.title,
        fontSize: 60,
        textAlign:"center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
})