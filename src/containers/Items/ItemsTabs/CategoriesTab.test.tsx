import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { addAllProviders } from '../../../utils/testUtils';
import CategoriesTab from './CategoriesTab';
import { TextPosition, BackgroundTheme } from '../../../redux/categories/data';

describe('Categories tab', () => {
  it('renders the categories correctly', () => {
    const rendered: RenderResult = render(
      addAllProviders({component: <CategoriesTab />, storeData: {
        categories: [
          {
            id: 'icecream',
            name: 'Ice Cream',
            image: '',
            textPosition: TextPosition.RIGHT,
            backgroundTheme: BackgroundTheme.LIGHT
          },
          {
            id: 'frozenfoods',
            name: 'Frozen Foods',
            image: '',
            textPosition: TextPosition.RIGHT,
            backgroundTheme: BackgroundTheme.LIGHT
          },
          {
            id: 'groceries',
            name: 'Groceries',
            image: '',
            textPosition: TextPosition.RIGHT,
            backgroundTheme: BackgroundTheme.LIGHT
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
