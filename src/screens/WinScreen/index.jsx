import { Text, View, Button } from "react-native"
import { styles } from "./style"
import {colors} from "../../constants/theme"

const WinScreen = ({ points, restartGame }) => {


    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {"You Win!!!"}
                </Text>
                <Text style={styles.score}>
                    {"Score: " + points.current}
                </Text>
                <Button onPress={restartGame} color={colors.secundary} title="Restart" />
            </View>
        </View>
    )
}

export default WinScreen