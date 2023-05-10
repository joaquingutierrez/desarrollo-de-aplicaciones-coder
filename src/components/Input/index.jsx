import {View, TextInput, Button} from "react-native"
import {styles} from "./styles"

const Input = ({placeHolder, buttonTitle, handleButton, value, handleOnChangeText}) => {
    
    
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder={placeHolder} style={styles.input} onChangeText={handleOnChangeText} value={value} />
            <Button title={buttonTitle} color="#0077B6" onPress={handleButton} />
        </View>
    )
}

export default Input 