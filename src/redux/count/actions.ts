import {
    CounterTypes, 
    CountFunctionsEnum,
    OperationState
} from './types';

export function increaseCounter(count: number): CounterTypes {
    return {
        type: CountFunctionsEnum.INCREASE_COUNT,
        payload: count
    }
}

export function decreaseCounter(count: number): CounterTypes {
    return {
        type: CountFunctionsEnum.DECREASE_COUNT,
        payload: count
    }
}

export function recieveCounter(data: OperationState): CounterTypes {
    return {
        type: CountFunctionsEnum.RECEIVE_COUNT,
        payload: data
    }
}