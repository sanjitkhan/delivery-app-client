import { combineReducers } from "redux";
import { brandsReducer } from "./brands";
import { categoriesReducer } from "./categories";
import countReducer from "./count/reducers";
import itemsReducer from "./items/reducers";

export const rootReducer = combineReducers({
    count: countReducer,
    items: itemsReducer,
    categories: categoriesReducer,
    brands: brandsReducer
})

export type RootState = ReturnType<typeof rootReducer>