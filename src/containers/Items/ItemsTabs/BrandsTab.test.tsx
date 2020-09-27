import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { addAllProviders } from '../../../utils/testUtils';
import BrandsTab from './BrandsTab';
import { Brand } from '../../../redux/brands/data';
import configureMockStore from 'redux-mock-store';
describe('Brands tab', () => {
  it('renders the brands correctly', () => {
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
            numItems: 5,
            isFavourited: false
          },
          {
            id: Brand.GODREJ,
            name: 'Godrej',
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
      addAllProviders({component: <BrandsTab />, store: mockStore})
    );
    const { getByText } = rendered;
    expect(getByText(/Kwality Walls/)).toBeInTheDocument();
    expect(getByText(/Godrej/)).toBeInTheDocument();
    if (rendered) rendered.unmount();
  });
});
