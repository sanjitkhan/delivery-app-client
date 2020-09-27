import { BrandState } from './data';
import {
    BrandsFunctionsEnum,
    BrandsTypes
} from './types';

export function addBrand(brand: BrandState): BrandsTypes {
    return {
        type: BrandsFunctionsEnum.ADD_BRAND,
        payload: brand
    }
}

export function deleteBrand(id: string): BrandsTypes {
    return {
        type: BrandsFunctionsEnum.DELETE_BRAND,
        payload: id
    }
}

export function fetchAllBrands(): BrandsTypes {
    return {
        type: BrandsFunctionsEnum.FETCH_ALL_BRANDS
    }
}

export function ReceiveBrands(brands: BrandState[]): BrandsTypes {
    return {
        type: BrandsFunctionsEnum.RECEIVE_BRANDS,
        payload: {
            brands
        }
    }
}
