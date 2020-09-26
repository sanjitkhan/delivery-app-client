import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { ResponseState } from "../types";
import confectioneryImg from "../../assets/images/category_confectionery.jpg"
import { BackgroundTheme, CategoriesState, CategoryState, TextPosition } from './data';
import { CategoriesFunctionsEnum } from './types';
import { ReceiveCategories } from './actions';

export const c: CategoriesState = {
    categories: [
        {
            id: 'confectioneries',
            name: 'Confectioneries',
            image: confectioneryImg,
            textPosition: TextPosition.LEFT,
            backgroundTheme: BackgroundTheme.LIGHT
        }
    ]
};

function* addCategory(params: {type: CategoriesFunctionsEnum, payload: CategoryState}) {
    try {
        // send call to add category
        const response: ResponseState = {
            data: c,
            status: '',
            error: ''
        }; // addcategory(payload)
        if (response.error) {
            throw new Error(response.error);
        }
        yield put(ReceiveCategories(response.data));
    } catch (error) {
        console.log(error);
    }
}

function* deleteCategory(params: {type: CategoriesFunctionsEnum, payload: string}) {
    try {
        // send call to delete category
        const response: ResponseState = {
            data: c,
            status: '',
            error: ''
        }; // deletecategory(payload)
        if (response.error) {
            throw new Error(response.error);
        }
        yield put(ReceiveCategories(response.data));
    } catch (error) {
        console.log(error);
    }
}

function* fetchAllCategories(params: {type: CategoriesFunctionsEnum}) {
    try {
        // send call to fetch all categories
        const response: ResponseState = {
            data: c,
            status: '',
            error: ''
        }; // fetchAllcategories()
        if (response.error) {
            throw new Error(response.error);
        }
        yield put(ReceiveCategories(response.data));
    } catch (error) {
        console.log(error);
    }
}

export function* watchCategoriesManagers() {
    yield takeEvery(
        CategoriesFunctionsEnum.ADD_CATEGORY,
        addCategory
    );
    yield takeEvery(
        CategoriesFunctionsEnum.DELETE_CATEGORY,
        deleteCategory
    );
    yield takeEvery(
        CategoriesFunctionsEnum.FETCH_ALL_CATEGORIES,
        fetchAllCategories
    );
}

export function* watchCategoriesFunctions() {
    yield all([
      fork(watchCategoriesManagers)
    ]);
  }
  