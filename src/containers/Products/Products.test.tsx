import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { addAllProviders } from '../../utils/testUtils';
import Products from './Products';
import { Brand } from '../../redux/brands/data';
import { Category } from '../../redux/categories/data';
import configureMockStore from 'redux-mock-store';

describe('Products Page', () => {
  it('renders the products correctly', () => {
    const mockStoreConfig = configureMockStore();
    const mockStore = mockStoreConfig({
      items: {
        items: [
          {
            id: 'mccain-item1',
            image: '',
            name: 'McCain item 1',
            brand: Brand.MC_CAIN,
            categories: [Category.FROZEN_FOOD],
            stock: 5,
            price: 100.00,
            isFavourited: true
          },
          {
            id: 'godrej-item1',
            image: '',
            name: 'Godrej item 1',
            brand: Brand.GODREJ,
            categories: [Category.FROZEN_FOOD],
            stock: 3,
            price: 200.00,
            isFavourited: false
          }
        ]
      },
      categories: {
        categories: []
      },
      brands: {
        brands: [
          {
            id: Brand.GODREJ,
            name: 'Godrej',
            image: '',
            numItems: 8,
            isFavourited: true
          },
          {
            id: Brand.MC_CAIN,
            name: 'McCain',
            image: '',
            numItems: 5,
            isFavourited: false
          }
        ]
      },
      filters: {
        filters: {}
      }
    });
    const rendered: RenderResult = render(
      addAllProviders({component: <Products />, store: mockStore})
    );
    const { getByText } = rendered;
    expect(getByText(/Godrej item 1/)).toBeInTheDocument();
    expect(getByText(/McCain item 1/)).toBeInTheDocument();
    if (rendered) rendered.unmount();
  });
});
