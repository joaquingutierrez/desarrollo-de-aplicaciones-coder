import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { DirectionNavigator } from './navigation';
import store from "./store"


export default function App() {


    return (
        <Provider store={store}>
            <NavigationContainer>
                <DirectionNavigator />
            </NavigationContainer>
        </Provider>
    );
}


