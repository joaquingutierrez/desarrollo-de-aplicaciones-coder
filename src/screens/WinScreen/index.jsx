import { Text, View } from "react-native"
import { styles } from "./style"


const WinScreen = ({ points }) => {


    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {"You Win!!!"}
            </Text>
            <Text style={styles.score}>
                {"Score: " + points.current}
            </Text>
        </View>
    )
}

export default WinScreen