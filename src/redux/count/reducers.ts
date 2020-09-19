import {
    CounterTypes,
    CountFunctions,
    CountFunctionsEnum,
    CountState
} from './types';

const initialState: CountState = {
    count: 0
}

const getReducer = (countFunctions: CountFunctions) => (
    state = initialState,
    action: CounterTypes
): CountState => {
    switch(action.type) {
        case countFunctions.RECEIVE_COUNT: {
            switch(action.payload.op) {
                case "add": 
                    return {
                        count: state.count + action.payload.count
                    }
                case "sub":
                default:
                    return {
                        count: state.count - action.payload.count
                    }
            }
        }
        case countFunctions.INCREASE_COUNT:
        case countFunctions.DECREASE_COUNT:
        default: {
            return state
        }
    }
}

export default getReducer(CountFunctionsEnum);