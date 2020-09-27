import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { addAllProviders, mouseClick } from '../../utils/testUtils';
import BrandCard, { BrandCardProps } from './BrandCard';
import { Brand } from '../../redux/brands/data';
import configureMockStore from 'redux-mock-store';

const brandCardProps: Omit<BrandCardProps, 'location' | 'match' | 'history'> = {
  id: Brand.KWALITY_WALLS,
  name: 'Kwality Walls',
  image: '',
  numItems: 3,
  isFavourited: false,
  width: 20
}

describe('Brand card', () => {
  it('renders the card correctly', () => {
    const rendered: RenderResult = render(
      addAllProviders({component: <BrandCard {...brandCardProps}/>})
    );
    const { getByText } = rendered;
    expect(getByText(/Kwality Walls/)).toBeInTheDocument();
    expect(getByText(/3 items/)).toBeInTheDocument();
    if (rendered) rendered.unmount();
  });

  it('should add a brand filter on clicking on a brand card', async () => {
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
      addAllProviders({component: <BrandCard {...brandCardProps} />, store: mockStore})
    );
    const card = rendered.getByText(/Kwality Walls/);
    mouseClick(card);
    const actions = mockStore.getActions();
    expect(actions).toEqual([
      {
        type: "CLEAR_FILTERS",
      },
      {
        payload: {
          brands: ["kwalitywalls"],
        },
        type: "ADD_FILTER",
      }
    ]);
  });
});
