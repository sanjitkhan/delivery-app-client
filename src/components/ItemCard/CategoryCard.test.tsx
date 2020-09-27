import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { addAllProviders } from '../../utils/testUtils';
import ItemCard, { ItemCardProps } from './ItemCard';
import { Brand } from '../../redux/brands/data';
import { Category } from '../../redux/categories/data';

const itemCardProps: Omit<ItemCardProps, 'location' | 'match' | 'history'> = {
  id: 'mccain-item1',
  image: '',
  name: 'Item 1',
  brand: Brand.MC_CAIN,
  category: [Category.FROZEN_FOOD],
  stock: 5,
  price: 100.00,
  isFavourited: true
};

describe('Item card', () => {
  it('renders the card correctly', () => {
    const rendered: RenderResult = render(
      addAllProviders({component: <ItemCard {...itemCardProps}/>})
    );
    const { getByText } = rendered;
    expect(getByText(/Item 1/)).toBeInTheDocument(); // name
    expect(getByText(/McCain/)).toBeInTheDocument(); // brand
    expect(getByText(/Rs. 100/)).toBeInTheDocument(); // price
    expect(getByText(/5/)).toBeInTheDocument(); // quantity
    if (rendered) rendered.unmount();
  });
});
