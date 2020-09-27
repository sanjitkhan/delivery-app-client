import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { addAllProviders } from '../../../utils/testUtils';
import CategoriesTab from './CategoriesTab';
import { TextPosition, BackgroundTheme, Category } from '../../../redux/categories/data';
import configureMockStore from 'redux-mock-store';

describe('Categories tab', () => {
  it('renders the categories correctly', () => {
    const mockStoreConfig = configureMockStore();
    const mockStore = mockStoreConfig({
      items: {
        items: []
      },
      categories: {
        categories: [
          {
            id: Category.ICE_CREAM,
            name: 'Ice Cream',
            image: '',
            numItems: 6,
            textPosition: TextPosition.RIGHT,
            backgroundTheme: BackgroundTheme.LIGHT
          },
          {
            id: Category.FROZEN_FOOD,
            name: 'Frozen Foods',
            image: '',
            numItems: 6,
            textPosition: TextPosition.RIGHT,
            backgroundTheme: BackgroundTheme.LIGHT
          },
          {
            id: Category.GROCERY,
            name: 'Groceries',
            image: '',
            numItems: 6,
            textPosition: TextPosition.RIGHT,
            backgroundTheme: BackgroundTheme.LIGHT
          }
        ]
      },
      brands: {
        brands: []
      },
      filters: {
        filters: {}
      }
    });
    const rendered: RenderResult = render(
      addAllProviders({component: <CategoriesTab />, store: mockStore})
    );
    const { getByText } = rendered;
    expect(getByText(/Ice Cream/)).toBeInTheDocument();
    expect(getByText(/Frozen Foods/)).toBeInTheDocument();
    expect(getByText(/Groceries/)).toBeInTheDocument();
    if (rendered) rendered.unmount();
  });
});
