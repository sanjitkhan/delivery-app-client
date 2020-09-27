import { combineReducers } from "redux";
import { brandsReducer } from "./brands";
import { categoriesReducer } from "./categories";
import { filtersReducer } from "./filters";
import itemsReducer from "./items/reducers";

export const rootReducer = combineReducers({
    items: itemsReducer,
    categories: categoriesReducer,
    brands: brandsReducer,
    filters: filtersReducer
})

export type RootState = ReturnType<typeof rootReducer>