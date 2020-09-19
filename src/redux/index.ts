import { combineReducers } from "redux";
import countReducer from "./count/reducers";

export const rootReducer = combineReducers({
    count: countReducer
})

// export default function rootReducer(state: CombinedState<{ count: CountState; }> | undefined, action: CounterTypes) {
//     return applicationReducers(state, action);
// }
export type RootState = ReturnType<typeof rootReducer>