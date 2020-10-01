import React from 'react';
import { render, RenderResult, within } from '@testing-library/react';
import { addAllProviders, changeInput, getMockStore } from '../../utils/testUtils';
import { Brand } from '../../redux/brands/data';
import { BackgroundTheme, Category, TextPosition } from '../../redux/categories/data';
import SearchBar from './SearchBar';

describe('Search bar', () => {
  let rendered: RenderResult;
  let mockStore;
  let searchInput;
  let searchDropdown;
  beforeEach(() => {
    mockStore = getMockStore({
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
          numItems: 3,
          isFavourited: false
        }
      ],
      items: [
        {
          id: 'kwalitywalls-item1',
          image: '',
          name: 'Item 1',
          brand: Brand.KWALITY_WALLS,
          categories: [Category.ICE_CREAM],
          stock: 5,
          price: 100.00,
          isFavourited: true
        },
        {
          id: 'mccain-item1',
          image: '',
          name: 'Item 2',
          brand: Brand.MC_CAIN,
          categories: [Category.FROZEN_FOOD],
          stock: 5,
          price: 100.00,
          isFavourited: true
        }
      ],
      categories: [
        {
          id: Category.ICE_CREAM,
          name: 'Ice Cream',
          image: '',
          numItems: 6,
          textPosition: TextPosition.RIGHT,
          backgroundTheme: BackgroundTheme.DARK
        },
        {
          id: Category.FROZEN_FOOD,
          name: 'Frozen Food',
          image: '',
          numItems: 6,
          textPosition: TextPosition.RIGHT,
          backgroundTheme: BackgroundTheme.DARK
        }
      ]
    });
    rendered = render(
      addAllProviders({component: <SearchBar />, store: mockStore})
    );
    searchDropdown = rendered.getByTestId("items-search-test");
    searchInput = searchDropdown.children[0];
  });
  afterEach(() => {
    if (rendered) rendered.unmount();
  });

  it('should return searched item by item name', () => {
    changeInput(searchInput, "item");
    const searchResults = within(searchDropdown).getByRole("listbox");
    expect(within(searchResults).getByText(/Item 1/)).toBeInTheDocument();
  });
  it('should return searched item by brand name', () => {
    changeInput(searchInput, "cain");
    const searchResults = within(searchDropdown).getByRole("listbox");
    expect(within(searchResults).getByText(/McCain/)).toBeInTheDocument();
  });
  it('should return searched item by category name', () => {
    changeInput(searchInput, "frozen");
    const searchResults = within(searchDropdown).getByRole("listbox");
    expect(within(searchResults).getByText(/Item 2/)).toBeInTheDocument();
  });
});
