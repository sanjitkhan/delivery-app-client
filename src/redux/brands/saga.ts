import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { ResponseState } from "../types";
import { ReceiveBrands } from './actions';
import { BrandState } from './data';
import { BrandsFunctionsEnum } from './types';

function* addBrand(params: {type: BrandsFunctionsEnum, payload: BrandState}) {
    try {
        // send call to add Brand
        const response: ResponseState = {
            data: [],
            status: '',
            error: ''
        }; // addBrand(payload)
        if (response.error) {
            throw new Error(response.error);
        }
        yield put(ReceiveBrands(response.data));
    } catch (error) {
        console.log(error);
    }
}

function* deleteBrand(params: {type: BrandsFunctionsEnum, payload: string}) {
    try {
        // send call to delete Brand
        const response: ResponseState = {
            data: [],
            status: '',
            error: ''
        }; // deleteBrand(payload)
        if (response.error) {
            throw new Error(response.error);
        }
        yield put(ReceiveBrands(response.data));
    } catch (error) {
        console.log(error);
    }
}

function* fetchAllBrands(params: {type: BrandsFunctionsEnum}) {
    try {
        // send call to fetch all Brands
        const response: ResponseState = {
            data: [],
            status: '',
            error: ''
        }; // fetchAllBrands()
        if (response.error) {
            throw new Error(response.error);
        }
        yield put(ReceiveBrands(response.data));
    } catch (error) {
        console.log(error);
    }
}

export function* watchBrandsManagers() {
    yield takeEvery(
        BrandsFunctionsEnum.ADD_BRAND,
        addBrand
    );
    yield takeEvery(
        BrandsFunctionsEnum.DELETE_BRAND,
        deleteBrand
    );
    yield takeEvery(
        BrandsFunctionsEnum.FETCH_ALL_BRANDS,
        fetchAllBrands
    );
}

export function* watchBrandsFunctions() {
    yield all([
      fork(watchBrandsManagers)
    ]);
  }
  