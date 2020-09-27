import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { addAllProviders, mouseClick } from '../../utils/testUtils';
import CategoryCard, { CategoryCardProps } from './CategoryCard';
import { TextPosition, BackgroundTheme, Category } from '../../redux/categories/data';
import configureMockStore from 'redux-mock-store';

const categoryCardProps: Omit<CategoryCardProps, 'location' | 'match' | 'history'> = {
  id: Category.ICE_CREAM,
  width: 50,
  image: '',
  name: "Ice Cream",
  textPosition: TextPosition.RIGHT,
  backgroundTheme: BackgroundTheme.DARK
};

describe('Category card', () => {
  it('renders the card correctly', () => {
    const rendered: RenderResult = render(
      addAllProviders({component: <CategoryCard {...categoryCardProps}/>})
    );
    const { getByText } = rendered;
    expect(getByText(/Ice Cream/)).toBeInTheDocument();
    if (rendered) rendered.unmount();
  });

  it('should add a category filter on clicking on a category card', async () => {
    const mockStoreConfig = configureMockStore();
    const mockStore = mockStoreConfig({
      items: {
        items: []
      },
      categories: {
        categories: []
      },
      brands: {
        brands: []
      },
      filters: {
        filters: {}
      }
    });
    const rendered: RenderResult = render(
      addAllProviders({component: <CategoryCard {...categoryCardProps} />, store: mockStore})
    );
    const card = rendered.getByText(/Ice Cream/);
    mouseClick(card);
    const actions = mockStore.getActions();
    expect(actions).toEqual([
      {
        type: "CLEAR_FILTERS",
      },
      {
        payload: {
          categories: ["icecream"],
        },
        type: "ADD_FILTER",
      }
    ]);
  });
});
