import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { addAllProviders } from '../../../utils/testUtils';
import CategoriesTab from './CategoriesTab';

describe('Categories tab', () => {
  it('renders the categories correctly', () => {
    const rendered: RenderResult = render(
      addAllProviders({component: <CategoriesTab />, storeData: {
        categories: [
          {
            id: 'icecream',
            name: 'Ice Cream',
            image: ''
          },
          {
            id: 'frozenfoods',
            name: 'Frozen Foods',
            image: ''
          },
          {
            id: 'groceries',
            name: 'Groceries',
            image: ''
          }
        ]
      }})
    );
    const { getByText } = rendered;
    expect(getByText(/Ice Cream/)).toBeInTheDocument();
    expect(getByText(/Frozen Foods/)).toBeInTheDocument();
    expect(getByText(/Groceries/)).toBeInTheDocument();
    if (rendered) rendered.unmount();
  });
});
