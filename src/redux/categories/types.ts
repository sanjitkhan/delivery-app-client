import { CategoriesState, CategoryState } from "./data";

export enum CategoriesFunctionsEnum {
    ADD_CATEGORY = 'ADD_CATEGORY',
    DELETE_CATEGORY = 'DELETE_CATEGORY',
    FETCH_ALL_CATEGORIES = 'FETCH_ALL_CATEGORIES',
    RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
}

type AddCategory = CategoriesFunctionsEnum.ADD_CATEGORY;
type DeleteCategory = CategoriesFunctionsEnum.DELETE_CATEGORY;
type FetchAllCategories = CategoriesFunctionsEnum.FETCH_ALL_CATEGORIES;
type ReceiveCategories = CategoriesFunctionsEnum.RECEIVE_CATEGORIES;

// TODO: try to reduce further
export interface CategoriesFunctions {
    ADD_CATEGORY: AddCategory;
    DELETE_CATEGORY: DeleteCategory;
    FETCH_ALL_CATEGORIES: FetchAllCategories;
    RECEIVE_CATEGORIES: ReceiveCategories;
}

interface AddCategoryAction {
    type: AddCategory,
    payload: CategoryState
}

interface DeleteCategoryAction {
    type: DeleteCategory,
    payload: string
}

interface FetchAllCategoriesAction {
    type: FetchAllCategories
}

interface ReceiveCategoriesAction {
    type: ReceiveCategories,
    payload: CategoriesState
}

export interface CategoriesActions {
    addCategory: any;
    deleteCategory: any;
    fetchAllCategories: any;
    receiveCategories: any;
}

export type CategoriesTypes = AddCategoryAction | DeleteCategoryAction | FetchAllCategoriesAction | ReceiveCategoriesAction;