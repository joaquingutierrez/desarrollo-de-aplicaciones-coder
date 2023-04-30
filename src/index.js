import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button } from 'react-native';
import {styles} from "./style"

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            <TextInput placeholder='Nuevo evento...' style={styles.input}/>
            <Button title="Agregar" color="#0077B6" />
            </View>
        </View>
    );
}


