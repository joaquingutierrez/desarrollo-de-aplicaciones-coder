import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { DirectionNavigator } from './navigation';
import { store } from "./store"
import { init } from "./db"


init()
    .then(() => {
        console.log("Initialized database")
    })
    .catch((err) => {
        console.log("Initializing db failed")
        console.log(err)
    })

export default function App() {


    return (
        <Provider store={store}>
            <NavigationContainer>
                <DirectionNavigator />
            </NavigationContainer>
        </Provider>
    );
}


