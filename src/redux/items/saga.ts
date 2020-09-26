import { ItemsFunctionsEnum } from "./types";
import { all, fork, put, select, takeEvery } from 'redux-saga/effects';
import { ReceiveItems } from "./actions";
import { ResponseState } from "../types";
import { ItemState } from "./data";
import { getItems } from "./selectors";

function* addItem(params: {type: ItemsFunctionsEnum, payload: ItemState}) {
    try {
        // send call to add item
        const { items } = yield select(getItems);
        const response: ResponseState = {
            data: [...items, params.payload],
            status: '',
            error: ''
        }; // addItem(payload)
        // if (response.error) {
        //     throw new Error(response.error);
        // }
        yield put(ReceiveItems(response.data));
    } catch (error) {
        // console.log(error);
    }
}

function* deleteItem(params: {type: ItemsFunctionsEnum, payload: string}) {
    try {
        // send call to delete item
        const { items } = yield select(getItems);
        const response: ResponseState = {
            data: items.filter(({id}) => id !== params.payload),
            status: '',
            error: ''
        }; // deleteItem(payload)
        // if (response.error) {
        //     throw new Error(response.error);
        // }
        yield put(ReceiveItems(response.data));
    } catch (error) {
        // console.log(error);
    }
}

function* fetchAllItems(params: {type: ItemsFunctionsEnum}) {
    try {
        // send call to fetch all items
        const { items } = yield select(getItems);
        const response: ResponseState = {
            data: items,
            status: '',
            error: ''
        }; // fetchAllItems()
        // if (response.error) {
        //     throw new Error(response.error);
        // }
        yield put(ReceiveItems(response.data));
    } catch (error) {
        // console.log(error);
    }
}

export function* watchItemsManagers() {
    yield takeEvery(
        ItemsFunctionsEnum.ADD_ITEM,
        addItem
    );
    yield takeEvery(
        ItemsFunctionsEnum.DELETE_ITEM,
        deleteItem
    );
    yield takeEvery(
        ItemsFunctionsEnum.FETCH_ALL_ITEMS,
        fetchAllItems
    );
}

export function* watchItemsFunctions() {
    yield all([
      fork(watchItemsManagers)
    ]);
  }
  