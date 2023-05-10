import { StyleSheet } from "react-native";
import {fonts, colors} from "../../constants/theme"

export const styles =  StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
        gap: 40
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.tertiary,
        width: "90%",
        fontFamily: fonts.text,
        fontSize: 40
    }
})