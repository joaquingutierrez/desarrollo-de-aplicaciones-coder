import { Text, View } from "react-native"



const WinScreen = ({points}) => {


    return (
        <View>
            <Text>
                {"You Win!!!"}
                {points.current}
            </Text>
        </View>
    )
}

export default WinScreen