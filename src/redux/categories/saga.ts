import { all, fork, put, select, takeEvery } from 'redux-saga/effects';
import { ResponseState } from "../types";
import { CategoryState } from './data';
import { CategoriesFunctionsEnum } from './types';
import { ReceiveCategories } from './actions';
import { getCategories } from './selectors';

function* addCategory(params: {type: CategoriesFunctionsEnum, payload: CategoryState}) {
    try {
        // send call to add category
        const { categories } = yield select(getCategories);
        const response: ResponseState = {
            data: [...categories, params.payload],
            status: '',
            error: ''
        }; // addcategory(payload)
        // if (response.error) {
        //     throw new Error(response.error);
        // }
        yield put(ReceiveCategories(response.data));
    } catch (error) {
        // console.log(error);
    }
}

function* deleteCategory(params: {type: CategoriesFunctionsEnum, payload: string}) {
    try {
        // send call to delete category
        const { categories } = yield select(getCategories);
        const response: ResponseState = {
            data: categories.filter(({id}) => id !== params.payload),
            status: '',
            error: ''
        }; // deletecategory(payload)
        // if (response.error) {
        //     throw new Error(response.error);
        // }
        yield put(ReceiveCategories(response.data));
    } catch (error) {
        // console.log(error);
    }
}

function* fetchAllCategories(params: {type: CategoriesFunctionsEnum}) {
    try {
        // send call to fetch all categories
        const { categories } = yield select(getCategories);
        const response: ResponseState = {
            data: categories,
            status: '',
            error: ''
        }; // fetchAllcategories()
        // if (response.error) {
        //     throw new Error(response.error);
        // }
        yield put(ReceiveCategories(response.data));
    } catch (error) {
        // console.log(error);
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
  