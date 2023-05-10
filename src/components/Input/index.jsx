import {View, TextInput, Button} from "react-native"
import {styles} from "./styles"

const Input = ({color, placeHolder, buttonTitle, handleButton, value, handleOnChangeText}) => {
    
    
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder={placeHolder} style={styles.input} onChangeText={handleOnChangeText} value={value} />
            <Button title={buttonTitle} color={color} onPress={handleButton} />
        </View>
    )
}

export default Input 