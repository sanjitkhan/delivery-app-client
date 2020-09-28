import React from 'react';
import { render, RenderResult, within } from '@testing-library/react';
import { addAllProviders, getMockStore, mouseClick } from '../../utils/testUtils';
import FiltersPanel, { FiltersPanelProps } from './FiltersPanel';
import { Brand } from '../../redux/brands/data';
import { Category } from '../../redux/categories/data';

const openFn = jest.fn();

const filtersPanelProps: Pick<FiltersPanelProps, "isOpen" | "setIsOpen"> = {
  isOpen: true,
  setIsOpen: openFn
}

describe('Filters panel', () => {
  let rendered: RenderResult;
  let mockStore;
  beforeEach(() => {
    mockStore = getMockStore({
      filters: {
        name: 'query',
        brands: [Brand.KWALITY_WALLS, Brand.MC_CAIN],
        categories: [Category.ICE_CREAM, Category.FROZEN_FOOD],
        priceFrom: 100,
        priceTo: 500
      },
      brands: [
        {
          id: Brand.KWALITY_WALLS,
          name: 'Kwality Walls',
          image: '',
          numItems: 3,
          isFavourited: false
        },
        {
          id: Brand.MC_CAIN,
          name: 'McCain',
          image: '',
          numItems: 8,
          isFavourited: true
        }
      ]
    });
    rendered = render(
      addAllProviders({component: <FiltersPanel {...filtersPanelProps} />, store: mockStore})
    );
  });
  afterEach(() => {
    if (rendered) rendered.unmount();
  });

  describe('adding filters', () => {
    it('should toggle off a selected brand filter on clicking on a brand card', () => {
      if (rendered) rendered.unmount();
      const mockStore2 = getMockStore({
        filters: {
          brands: [Brand.KWALITY_WALLS]
        },
        brands: [
          {
            id: Brand.KWALITY_WALLS,
            name: 'Kwality Walls',
            image: '',
            numItems: 3,
            isFavourited: false
          }
        ]
      });
      rendered = render(
        addAllProviders({component: <FiltersPanel {...filtersPanelProps} />, store: mockStore2})
      );
      const { getByTestId } = rendered;
      const filtersContainer = getByTestId("filters-container-test");
      const brandCard = within(filtersContainer).getByText(/Kwality Walls/);
      mouseClick(brandCard);
      const actions = mockStore2.getActions();
      expect(actions).toEqual([
        {
          payload: "brands",
          type: "DELETE_FILTER",
        }
      ]);
    });
  
    it('should toggle on a non-selected brand filter on clicking on a brand card', () => {
      if (rendered) rendered.unmount();
      mockStore = getMockStore({
        filters: {},
        brands: [
          {
            id: Brand.KWALITY_WALLS,
            name: 'Kwality Walls',
            image: '',
            numItems: 3,
            isFavourited: false
          }
        ]
      });
      rendered = render(
        addAllProviders({component: <FiltersPanel {...filtersPanelProps} />, store: mockStore})
      );
      const { getByTestId } = rendered;
      const filtersContainer = getByTestId("filters-container-test");
      const brandCard = within(filtersContainer).getByText(/Kwality Walls/);
      mouseClick(brandCard);
      const actions = mockStore.getActions();
      expect(actions).toEqual([
        {
          payload: {
            brands: ["kwalitywalls"],
          },
          type: "ADD_FILTER",
        }
      ]);
    });
  });

  describe('clearing and removing filters', () => {
    it('should clear all filters when clicking on the clear filters button inside filter component', () => {
      const clearFiltersButton = rendered.getByText(/Clear all filters/);
      mouseClick(clearFiltersButton);
      const actions = mockStore.getActions();
      expect(actions).toEqual([
        {
          type: "CLEAR_FILTERS",
        }
      ]);
    });
    it('should clear all filters when clicking on the clear filters button on the selected filters component', () => {
      const filtersLabel = rendered.getByTestId("filters-label");
      const clearFiltersButton = within(filtersLabel).getByText(/Clear Filters/);
      mouseClick(clearFiltersButton);
      const actions = mockStore.getActions();
      expect(actions).toEqual([
        {
          type: "CLEAR_FILTERS",
        }
      ]);
    });
  });
  describe('clearing a filter on clicking the filter chip in selected filters', () => {
    let selectedFiltersContainer;
    beforeEach(() => {
      const selectedFiltersLabel = rendered.getByTestId("selected-filters-label-test");
      mouseClick(selectedFiltersLabel);
      selectedFiltersContainer = rendered.getByTestId("selected-filters-container-test");
    });
    it('should clear the name filter', () => {
      const filterChip = within(selectedFiltersContainer).getByText(/query/);
      mouseClick(filterChip);
      const actions = mockStore.getActions();
      expect(actions).toEqual([
        {
          payload: "name",
          type: "DELETE_FILTER",
        }
      ]);
    });
    it('should clear the price filter', () => {
      const filterChip = within(selectedFiltersContainer).getByText(/Price:/);
      mouseClick(filterChip);
      const actions = mockStore.getActions();
      expect(actions).toEqual([
        {
          payload: "priceFrom",
          type: "DELETE_FILTER",
        },
        {
          payload: "priceTo",
          type: "DELETE_FILTER",
        }
      ]);
    });
    it('should clear the brands filter', () => {
      const filterChip1 = within(selectedFiltersContainer).getByText(/Kwality Walls/);
      mouseClick(filterChip1);
      const actions1 = mockStore.getActions();
      expect(actions1).toEqual([
        {
          payload: {
            brands: ["mccain"] 
          },
          type: "ADD_FILTER",
        }
      ]);
    });
  });
});
