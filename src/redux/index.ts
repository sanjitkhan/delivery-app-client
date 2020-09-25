import { combineReducers } from "redux";
import countReducer from "./count/reducers";
import itemsReducer from "./items/reducers";

export const rootReducer = combineReducers({
    count: countReducer,
    items: itemsReducer
})

export type RootState = ReturnType<typeof rootReducer>