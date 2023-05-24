import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CategoryScreen, ProductListScreen, ProductDetailScreen } from "../../screens"

const Stack = createNativeStackNavigator()

const ShopNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='categories'>
            <Stack.Screen name="categories" component={CategoryScreen} />
            <Stack.Screen name="productList" component={ProductListScreen}
                options={({ route }) => ({
                    title: route.params.name
                })} />
            <Stack.Screen name="productDetail" component={ProductDetailScreen}
                options={({ route }) => ({
                    title: route.params.name
                })}
            />
        </Stack.Navigator>
    )
}

export default ShopNavigation