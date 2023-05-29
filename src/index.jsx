import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import TabsNavigator from "./navigation/tabs"
import store from "./store"


export default function App() {


    return (
        <Provider store={store}>
            <NavigationContainer>
                <TabsNavigator />
            </NavigationContainer>
        </Provider>
    );
}


