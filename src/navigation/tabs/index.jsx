import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import { ShopNavigation, CartNavigation, OrdersNavigation } from "../index";
import { colors } from "../../constants/theme";


const BottomTab = createBottomTabNavigator()

const TabsNavigator = () => {

    return (
        <BottomTab.Navigator
            initialRouteName="ShopTab"
            screenOptions={{ 
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 14,
                },
                tabBarActiveTintColor: colors.secundary,
                tabBarInactiveTintColor: colors.tertiary,
                tabBarStyle: {
                    backgroundColor: colors.primary
                },
            }}
        >
            <BottomTab.Screen name="ShopTab" component={ShopNavigation}
                options={{ 
                    tabBarLabel: "Shop",
                    tabBarIcon: ({focused, color, size}) => {
                        return <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
                    }
            }} />
            <BottomTab.Screen name="CartTab" component={CartNavigation}
                options={{ 
                    tabBarLabel: "Cart",
                    tabBarIcon: ({focused, color, size}) => {
                        return <Ionicons name={focused ? "cart" : "cart-outline"} size={size} color={color} />
                    } 
                }} />
            <BottomTab.Screen name="OrdersTab" component={OrdersNavigation}
                options={{ 
                    tabBarLabel: "Orders",
                    tabBarIcon: ({focused, color, size}) => {
                        return <Ionicons name={focused ? "book" : "book-outline"} size={size} color={color} />
                    }
            }} />
        </BottomTab.Navigator>
    )
}

export default TabsNavigator