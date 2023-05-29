import { createStore, combineReducers } from "redux";
import { categoryReducer } from "./reducers";

const rootReducer = combineReducers({
    categories: categoryReducer
})

export default createStore(rootReducer)