import { Text, View } from "react-native"
import { styles } from "./style"


const WinScreen = ({ points }) => {


    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {"You Win!!!"}
                </Text>
                <Text style={styles.score}>
                    {"Score: " + points.current}
                </Text>
            </View>
        </View>
    )
}

export default WinScreen