import { FiltersState, initialFiltersState } from "./data";
import { FiltersFunctions, FiltersFunctionsEnum, FiltersTypes } from "./types";

const getReducer = (filtersFunctions: FiltersFunctions) => (
    state = initialFiltersState,
    action: FiltersTypes
): FiltersState => {
    switch(action.type) {
        case filtersFunctions.ADD_FILTER: {
            return {
                filters: {...state.filters, ...action.payload}
            }
        }
        case filtersFunctions.DELETE_FILTER: {
            if (state.filters[action.payload]) {
                delete state.filters[action.payload];
            }
            return state;
        }
        case filtersFunctions.CLEAR_FILTERS: {
            return initialFiltersState;
        }
        default: {
            return state;
        }
    }
}

export default getReducer(FiltersFunctionsEnum);