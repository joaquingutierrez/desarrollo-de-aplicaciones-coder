import { categoryTypes } from "../types"

export const selectCategory = (id) => ({
    type: categoryTypes.SELECT_CATEGORY,
    categoryId: id
})