import { CountFunctionsEnum } from "./types";
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { recieveCounter } from "./actions";

// function* increaseCounter(params: { payload: { count: any; }; }) {
function* increaseCounter(params: {type: CountFunctionsEnum, payload: number}) {
    try {
        //add some delay
        yield put(recieveCounter({count: params.payload, op: 'add'}));
    } catch (error) {
        console.log(error);
    }
}

function* decreaseCounter(params: {type: CountFunctionsEnum, payload: number}) {
    try {
        //add some delay
        yield put(recieveCounter({count: params.payload, op: 'sub'}));
    } catch (error) {
        console.log(error);
    }
}

export function* watchCounters() {
    yield takeEvery(
        CountFunctionsEnum.INCREASE_COUNT,
        increaseCounter
    );
    yield takeEvery(
        CountFunctionsEnum.DECREASE_COUNT,
        decreaseCounter
    );
}

export function* watchApplicationFunctions() {
    yield all([
      fork(watchCounters)
    ]);
  }
  