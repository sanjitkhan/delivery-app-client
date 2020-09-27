import { FilterState } from "./data";

export enum FiltersFunctionsEnum {
    ADD_FILTER = 'ADD_FILTER',
    DELETE_FILTER = 'DELETE_FILTER',
    CLEAR_FILTERS = 'CLEAR_FILTERS'
}

type AddFilter = FiltersFunctionsEnum.ADD_FILTER;
type DeleteFilter = FiltersFunctionsEnum.DELETE_FILTER;
type ClearFilters = FiltersFunctionsEnum.CLEAR_FILTERS;

// TODO: try to reduce further
export interface FiltersFunctions {
    ADD_FILTER: AddFilter;
    DELETE_FILTER: DeleteFilter;
    CLEAR_FILTERS: ClearFilters;
}

interface AddFilterAction {
    type: AddFilter,
    payload: FilterState
}

interface DeleteFilterAction {
    type: DeleteFilter,
    payload: keyof FilterState
}

interface ClearFiltersAction {
    type: ClearFilters
}

export interface FiltersActions {
    addFilter: any;
    deleteFilter: any;
    clearFilters: any;
}

export type FiltersTypes = AddFilterAction | DeleteFilterAction | ClearFiltersAction;