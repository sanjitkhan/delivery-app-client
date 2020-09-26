import { ItemsFunctionsEnum } from "./types";
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { ReceiveItems } from "./actions";
import { ResponseState } from "../types";
import mccainImg from "../../assets/images/brand_mccain.png"
import { Brand } from "../brands/data";
import { Category } from "../categories/data";
import { ItemState } from "./data";

export const d: ItemState = {
    id: 'abcd',
    image: mccainImg,
    name: 'McCain item 1',
    brand: Brand.MC_CAIN,
    category: [Category.FROZEN_FOOD],
    stock: 5,
    price: 100.00,
    isFavourited: true
}

function* addItem(params: {type: ItemsFunctionsEnum, payload: ItemState}) {
    try {
        // send call to add item
        const response: ResponseState = {
            data: [d],
            status: '',
            error: ''
        }; // addItem(payload)
        if (response.error) {
            throw new Error(response.error);
        }
        yield put(ReceiveItems(response.data));
    } catch (error) {
        console.log(error);
    }
}

function* deleteItem(params: {type: ItemsFunctionsEnum, payload: string}) {
    try {
        // send call to delete item
        const response: ResponseState = {
            data: [d,d],
            status: '',
            error: ''
        }; // deleteItem(payload)
        if (response.error) {
            throw new Error(response.error);
        }
        yield put(ReceiveItems(response.data));
    } catch (error) {
        console.log(error);
    }
}

function* fetchItem(params: {type: ItemsFunctionsEnum, payload: string}) {
    try {
        // send call to fetch item
        const response: ResponseState = {
            data: [d],
            status: '',
            error: ''
        }; // fetchItem(payload)
        if (response.error) {
            throw new Error(response.error);
        }
        yield put(ReceiveItems(response.data));
    } catch (error) {
        console.log(error);
    }
}

function* fetchAllItems(params: {type: ItemsFunctionsEnum}) {
    try {
        // send call to fetch all items
        const response: ResponseState = {
            data: [d,d,d,d],
            status: '',
            error: ''
        }; // fetchAllItems()
        if (response.error) {
            throw new Error(response.error);
        }
        yield put(ReceiveItems(response.data));
    } catch (error) {
        console.log(error);
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
        ItemsFunctionsEnum.FETCH_ITEM,
        fetchItem
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
  