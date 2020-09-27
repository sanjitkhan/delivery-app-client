import { FilterState } from "./data";
import { FiltersFunctionsEnum, FiltersTypes } from "./types";
import { addFilter, clearFilters, deleteFilter } from "./actions";
import { filtersReducer } from ".";
import { Brand } from "../brands/data";

const filter: FilterState = {
  name: 'filtername'
};

describe('(Redux) Testing Filters actions', () => {
  it('should create an action to add a filter', () => {    
    const expectedAction = {
      type: FiltersFunctionsEnum.ADD_FILTER,
      payload: filter
    }
    expect(addFilter(filter)).toEqual(expectedAction);
  });
  it('should create an action to delete a filter', () => {    
    const expectedAction = {
      type: FiltersFunctionsEnum.DELETE_FILTER,
      payload: 'name'
    }
    expect(deleteFilter('name')).toEqual(expectedAction);
  });
  it('should create an action to clear all filters', () => {    
    const expectedAction = {
      type: FiltersFunctionsEnum.CLEAR_FILTERS
    }
    expect(clearFilters()).toEqual(expectedAction);
  });
});

describe('(Redux) Testing Filters reducers', () => {
  it('should return the initial state', () => {
    // no actions return the initial state
  });
  it('should add a filter', () => {
    const filterAction: FiltersTypes = {
      type: FiltersFunctionsEnum.ADD_FILTER,
      payload: {
        ...filter
      }
    }
    expect(filtersReducer({filters: { brands: [Brand.KWALITY_WALLS] }}, filterAction)).toEqual({
      filters: {
        brands: [Brand.KWALITY_WALLS],
        ...filter
      }
    })
  });
  it('should delete a filter', () => {
    const filterAction: FiltersTypes = {
      type: FiltersFunctionsEnum.DELETE_FILTER,
      payload: 'name'
    }
    expect(filtersReducer({filters: { name: 'abcd', brands: [Brand.KWALITY_WALLS] }}, filterAction)).toEqual({
      filters: {
        brands: [Brand.KWALITY_WALLS]
      }
    })
  });
  it('should clear all filters', () => {
    const filterAction: FiltersTypes = {
      type: FiltersFunctionsEnum.CLEAR_FILTERS
    }
    expect(filtersReducer({filters: { name: 'abcd', brands: [Brand.KWALITY_WALLS] }}, filterAction)).toEqual({
      filters: {}
    })
  });
});
