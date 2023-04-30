import {View, TextInput, Button} from "react-native"
import {styles} from "./styles"

const Input = ({handleAddEvent, value, handleOnChangeText}) => {
    
    
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='Nuevo evento...' style={styles.input} onChangeText={handleOnChangeText} value={value} />
            <Button title="Agregar" color="#0077B6" onPress={handleAddEvent} />
        </View>
    )
}

export default Input 