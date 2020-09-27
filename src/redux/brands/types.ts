import { BrandsState, BrandState } from "./data";

export enum BrandsFunctionsEnum {
    ADD_BRAND = 'ADD_BRAND',
    DELETE_BRAND = 'DELETE_BRAND',
    FETCH_ALL_BRANDS = 'FETCH_ALL_BRANDS',
    RECEIVE_BRANDS = 'RECEIVE_BRANDS'
}

type AddBrand = BrandsFunctionsEnum.ADD_BRAND;
type DeleteBrand = BrandsFunctionsEnum.DELETE_BRAND;
type FetchAllBrands = BrandsFunctionsEnum.FETCH_ALL_BRANDS;
type ReceiveBrands = BrandsFunctionsEnum.RECEIVE_BRANDS;

// TODO: try to reduce further
export interface BrandsFunctions {
    ADD_BRAND: AddBrand;
    DELETE_BRAND: DeleteBrand;
    FETCH_ALL_BRANDS: FetchAllBrands;
    RECEIVE_BRANDS: ReceiveBrands;
}

interface AddBrandAction {
    type: AddBrand,
    payload: BrandState
}

interface DeleteBrandAction {
    type: DeleteBrand,
    payload: string
}

interface FetchAllBrandsAction {
    type: FetchAllBrands
}

interface ReceiveBrandsAction {
    type: ReceiveBrands,
    payload: BrandsState
}

export interface BrandsActions {
    addBrand: any;
    deleteBrand: any;
    fetchAllBrands: any;
    receiveBrands: any;
}

export type BrandsTypes = AddBrandAction | DeleteBrandAction | FetchAllBrandsAction | ReceiveBrandsAction;