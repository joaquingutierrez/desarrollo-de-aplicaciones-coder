import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrdersScreen } from "../../screens";

const Stack = createNativeStackNavigator()

const OrdersNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Orders">
            <Stack.Screen name="Orders" component={OrdersScreen} />
        </Stack.Navigator>
    )
}

export default OrdersNavigation