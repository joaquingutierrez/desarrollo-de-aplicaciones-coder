import { StyleSheet, Text } from "react-native";

const CustomText = ({ myCustomText, textWhite }) => {


    return (
        <Text style={[styles.text, textWhite ? styles.textWhite : styles.textBlack]}>
            {myCustomText}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        
    },
    textWhite: {
        color: "#fff"
    },
    textBlack: {
        color: "#000"
    }
})

export default CustomText