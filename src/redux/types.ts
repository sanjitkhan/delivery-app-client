import { BrandsState } from "./brands/data";
import { CategoriesState } from "./categories/data";
import { FiltersState } from "./filters/data";
import { ItemsState } from "./items/data";

export interface ApplicationState {
    items: ItemsState;
    categories: CategoriesState;
    brands: BrandsState;
    filters: FiltersState;
}

export interface ResponseState {
    data: any;
    status: string;
    error?: string;
}