import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { addAllProviders } from '../../utils/testUtils';
import ItemCard, { ItemCardProps } from './ItemCard';
import { Brand } from '../../redux/brands/data';
import { Category } from '../../redux/categories/data';
import configureMockStore from 'redux-mock-store';

const itemCardProps: Omit<ItemCardProps, 'location' | 'match' | 'history' | 'brands'> = {
  id: 'mccain-item1',
  image: '',
  name: 'Item 1',
  brand: Brand.MC_CAIN,
  categories: [Category.FROZEN_FOOD],
  stock: 5,
  price: 100.00,
  isFavourited: true
};

describe('Item card', () => {
  it('renders the card correctly', () => {
    const mockStoreConfig = configureMockStore();
    const mockStore = mockStoreConfig({
      items: {
        items: []
      },
      categories: {
        categories: []
      },
      brands: {
        brands: [
          {
            id: Brand.KWALITY_WALLS,
            name: 'Kwality Walls',
            image: '',
            numItems: 3,
            isFavourited: false
          },
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
          },
          {
            id: Brand.BRITANNIA,
            name: 'Britannia',
            image: '',
            numItems: 7,
            isFavourited: false
          }
        ]
      },
      filters: {
        filters: {}
      }
    });
    const rendered: RenderResult = render(
      addAllProviders({component: <ItemCard {...itemCardProps} />, store: mockStore})
    );
    const { getByText } = rendered;
    expect(getByText(/Item 1/)).toBeInTheDocument(); // name
    expect(getByText(/McCain/)).toBeInTheDocument(); // brand
    expect(getByText(/Rs. 100/)).toBeInTheDocument(); // price
    expect(getByText(/5/)).toBeInTheDocument(); // quantity
    if (rendered) rendered.unmount();
  });
});
