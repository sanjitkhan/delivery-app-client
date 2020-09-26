import { CategoriesState, initialCategoriesState } from "./data";
import { CategoriesFunctions, CategoriesFunctionsEnum, CategoriesTypes } from "./types";

const getReducer = (categoriesFunctions: CategoriesFunctions) => (
    state = initialCategoriesState,
    action: CategoriesTypes
): CategoriesState => {
    switch(action.type) {
        case categoriesFunctions.RECEIVE_CATEGORIES: {
            return {
                categories: action.payload.categories
            }
        }
        default: {
            return state
        }
    }
}

export default getReducer(CategoriesFunctionsEnum);