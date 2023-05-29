import { categories } from "../../constants/data/categories"

const initialState = {
    data: categories,
    selected: null
}

const categoryReducer = (state = initialState, action) => {
    return state
}

export default categoryReducer