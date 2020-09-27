import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { addAllProviders } from '../../utils/testUtils';
import Products from './Products';
import { Brand } from '../../redux/brands/data';
import { Category } from '../../redux/categories/data';

describe('Products Page', () => {
  it('renders the products correctly', () => {
    const rendered: RenderResult = render(
      addAllProviders({component: <Products />, storeData: {
        items: [
          {
            id: 'mccain-item1',
            image: '',
            name: 'McCain item 1',
            brand: Brand.MC_CAIN,
            category: [Category.FROZEN_FOOD],
            stock: 5,
            price: 100.00,
            isFavourited: true
          },
          {
            id: 'godrej-item1',
            image: '',
            name: 'Godrej item 1',
            brand: Brand.GODREJ,
            category: [Category.FROZEN_FOOD],
            stock: 3,
            price: 200.00,
            isFavourited: false
          }
        ]
      }})
    );
    const { getByText } = rendered;
    expect(getByText(/Godrej item 1/)).toBeInTheDocument();
    expect(getByText(/McCain item 1/)).toBeInTheDocument();
    if (rendered) rendered.unmount();
  });
});
