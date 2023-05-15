import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from "./style"
import { CategoryScreen, ProductListScreen, ProductDetailScreen } from "./screens"
import { useFonts } from 'expo-font';
import { colors } from "./constants/theme"


export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='categories'>
                <Stack.Screen name="categories" component={CategoryScreen} />
                <Stack.Screen name="productList" component={ProductListScreen} />
                <Stack.Screen name="productDetail" component={ProductDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


