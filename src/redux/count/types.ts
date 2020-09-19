export enum CountFunctionsEnum {
    INCREASE_COUNT = 'INCREASE_COUNT',
    DECREASE_COUNT = 'DECREASE_COUNT',
    RECEIVE_COUNT = 'RECEIVE_COUNT'
}

type IncreaseCount = CountFunctionsEnum.INCREASE_COUNT;
type DecreaseCount = CountFunctionsEnum.DECREASE_COUNT;
type ReceiveCount = CountFunctionsEnum.RECEIVE_COUNT;

// TODO: try to reduce further
export interface CountFunctions {
    INCREASE_COUNT: IncreaseCount;
    DECREASE_COUNT: DecreaseCount;
    RECEIVE_COUNT: ReceiveCount
}

export interface CountState {
    count: number;
}

export interface OperationState {
    count: number;
    op: string;
}

interface IncreaseCountAction {
    type: IncreaseCount,
    payload: number
}

interface DecreaseCountAction {
    type: DecreaseCount,
    payload: number
}

interface ReceiveCountAction {
    type: ReceiveCount,
    payload: OperationState
}

export type CounterTypes = IncreaseCountAction | DecreaseCountAction | ReceiveCountAction;