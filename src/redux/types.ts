import { BrandsState } from "./brands/data";
import { CategoriesState } from "./categories/data";
import { CountState } from "./count/types";
import { ItemsState } from "./items/data";

export interface ApplicationState {
    items: ItemsState;
    count: CountState;
    categories: CategoriesState;
    brands: BrandsState;
}

export interface ResponseState {
    data: any;
    status: string;
    error?: string;
}