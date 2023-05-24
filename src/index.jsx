import { NavigationContainer } from '@react-navigation/native';

import {CartNavigation, ShopNavigation, OrdersNavigation} from "./navigation"



export default function App() {


    return (
        <NavigationContainer>
            <ShopNavigation />
        </NavigationContainer>
    );
}


