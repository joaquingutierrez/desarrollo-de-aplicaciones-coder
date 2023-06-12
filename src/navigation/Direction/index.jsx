import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons"

import { DirectionsScreen, NewDirectionScreen, DirectionDetailScreen } from "../../screens"
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator()

const DirectionNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Places'>
            <Stack.Screen name="Places" component={DirectionsScreen}
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
                    }
                )
                }
            />
            <Stack.Screen name="PlaceDetail" component={DirectionDetailScreen}
                options={({ navigation }) => (
                    {
                        title: "Direction Detail",
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