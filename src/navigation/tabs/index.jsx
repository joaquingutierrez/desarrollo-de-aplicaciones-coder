import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import { ShopNavigation, CartNavigation, OrdersNavigation } from "../index";


const BottomTab = createBottomTabNavigator()

const TabsNavigator = () => {

    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="ShopTab" component={ShopNavigation} />
            <BottomTab.Screen name="CartTab" component={CartNavigation} />
            <BottomTab.Screen name="OrdersTab" component={OrdersNavigation} />
        </BottomTab.Navigator>
    )
}

export default TabsNavigator