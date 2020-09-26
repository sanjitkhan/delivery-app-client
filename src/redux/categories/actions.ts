import { CategoryState } from './data';
import {
    CategoriesFunctionsEnum,
    CategoriesTypes
} from './types';

export function addCategory(category: CategoryState): CategoriesTypes {
    return {
        type: CategoriesFunctionsEnum.ADD_CATEGORY,
        payload: category
    }
}

export function deleteCategory(id: string): CategoriesTypes {
    return {
        type: CategoriesFunctionsEnum.DELETE_CATEGORY,
        payload: id
    }
}

export function fetchAllCategories(): CategoriesTypes {
    return {
        type: CategoriesFunctionsEnum.FETCH_ALL_CATEGORIES
    }
}

export function ReceiveCategories(categories: CategoryState[]): CategoriesTypes {
    return {
        type: CategoriesFunctionsEnum.RECEIVE_CATEGORIES,
        payload: {
            categories
        }
    }
}
