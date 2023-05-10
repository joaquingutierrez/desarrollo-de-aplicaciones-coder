import { StyleSheet } from "react-native";
import {fonts, colors} from "../../constants/theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textContainer: {
        padding: 40,
        backgroundColor: colors.primary,
        borderRadius: 40,
        gap: 20
    },
    text: {
        fontSize: 40,
        fontFamily: fonts.title,
        color: "#fff"
    },
    score: {
        fontSize: 30,
        fontFamily: fonts.text,
        color: "#fff"
    }
})