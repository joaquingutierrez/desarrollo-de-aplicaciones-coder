import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DirectionsScreen } from "../../screens"

const Stack = createNativeStackNavigator()

const DirectionNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Directions'>
            <Stack.Screen name="Directions" component={DirectionsScreen} />
        </Stack.Navigator>
    )
}

export default DirectionNavigator