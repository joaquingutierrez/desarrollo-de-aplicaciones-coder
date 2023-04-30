import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {styles} from "./style"

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hola, Coder dasd!</Text>
            <StatusBar style="auto" />
        </View>
    );
}


