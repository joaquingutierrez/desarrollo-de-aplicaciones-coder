import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from "./style"
import { CategoryScreen, ProductListScreen, ProductDetailScreen } from "./screens"
import { useFonts } from 'expo-font';
import { colors } from "./constants/theme"



export default function App() {


    return (
        <View style={styles.container}>
            <CategoryScreen />
            <ProductListScreen />
            <ProductDetailScreen />
        </View>
    );
}


