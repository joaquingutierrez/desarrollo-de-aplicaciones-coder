import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons"

import { DirectionsScreen, NewDirectionScreen } from "../../screens"
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator()

const DirectionNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Place'>
            <Stack.Screen name="Place" component={DirectionsScreen}
                options={({ navigation }) => (
                    {
                        title: "Directions",
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate("NewPlace")}>
                                <Ionicons name="add-circle-outline" size={25} color="black" />
                            </TouchableOpacity>
                        )
                    }
                )
                }
            />
            <Stack.Screen name="NewPlace" component={NewDirectionScreen}
                options={({ navigation }) => (
                    {
                        title: "New Direction",
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate("NewPlace")}>
                                <Ionicons name="add-circle-outline" size={25} color="black" />
                            </TouchableOpacity>
                        )
                    }
                )
                }
            />
        </Stack.Navigator>
    )
}

export default DirectionNavigator