import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen } from "../../screens";

const Stack = createNativeStackNavigator()

const CartNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Cart">
            <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
    )
}

export default CartNavigation