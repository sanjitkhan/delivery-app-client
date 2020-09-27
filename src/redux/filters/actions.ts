import { FilterState } from './data';
import {
    FiltersFunctionsEnum,
    FiltersTypes,
} from './types';

export function addFilter(filter: FilterState): FiltersTypes {
    return {
        type: FiltersFunctionsEnum.ADD_FILTER,
        payload: filter
    }
}

export function deleteFilter(filterName: keyof FilterState): FiltersTypes {
    return {
        type: FiltersFunctionsEnum.DELETE_FILTER,
        payload: filterName
    }
}

export function clearFilters(): FiltersTypes {
    return {
        type: FiltersFunctionsEnum.CLEAR_FILTERS
    }
}
