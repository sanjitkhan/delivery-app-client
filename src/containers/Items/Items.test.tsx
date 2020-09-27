import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { addAllProviders, mouseClick } from '../../utils/testUtils';
import App from '../../App';
import { BackgroundTheme, Category, CategoryState, TextPosition } from '../../redux/categories/data';
import configureMockStore from 'redux-mock-store';
import { Brand } from '../../redux/brands/data';

const categories: CategoryState[] = [
  {
    id: Category.ICE_CREAM,
    name: 'Ice Cream',
    image: '',
    textPosition: TextPosition.RIGHT,
    backgroundTheme: BackgroundTheme.LIGHT
  }
];

describe('Items page', () => {
  it('renders items page properly', () => {
    const mockStoreConfig = configureMockStore();
    const mockStore = mockStoreConfig({
      items: {
        items: []
      },
      categories: {
        categories: categories
      },
      brands: {
        brands: []
      },
      filters: {
        filters: {}
      }
    });
    const rendered: RenderResult = render(
      addAllProviders({component: <App />, store: mockStore})
    );
    const { getByText } = rendered;
    expect(getByText(/Categories/)).toBeInTheDocument(); // "Categories" tab
    expect(getByText(/Brands/)).toBeInTheDocument(); // "Brands" tab
    expect(getByText(/Ice Cream/)).toBeInTheDocument(); // "Categories" tab data
    if (rendered) rendered.unmount();
  });

  it('routes to the correct tab on clicking a tabMenu button', () => {
    const mockStoreConfig = configureMockStore();
    const mockStore = mockStoreConfig({
      items: {
        items: []
      },
      categories: {
        categories: categories
      },
      brands: {
        brands: [
          {
            id: Brand.BRITANNIA,
            name: 'Britannia',
            numItems: 7,
            image: '',
            isFavourited: false
          }
        ]
      },
      filters: {
        filters: {}
      }
    });
    const rendered: RenderResult = render(
      addAllProviders({
        component: <App />,
        path: '/items',
        store: mockStore
      })
    );
    const { getByText } = rendered;
    const CategoriesScreenElement = getByText(/Ice Cream/);
    expect(CategoriesScreenElement).toBeInTheDocument(); // "Categories" tab data
    
    const BrandsElement = getByText(/Brands/);
    mouseClick(BrandsElement);

    const BrandsScreenElement = getByText(/Britannia/);
    expect(CategoriesScreenElement).not.toBeInTheDocument();
    expect(BrandsScreenElement).toBeInTheDocument();
  });
});
