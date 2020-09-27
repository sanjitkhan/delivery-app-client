import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { addAllProviders } from '../../../utils/testUtils';
import BrandsTab from './BrandsTab';
import { Brand } from '../../../redux/brands/data';
describe('Brands tab', () => {
  it('renders the brands correctly', () => {
    const rendered: RenderResult = render(
      addAllProviders({component: <BrandsTab />, storeData: {
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
      }})
    );
    const { getByText } = rendered;
    expect(getByText(/Kwality Walls/)).toBeInTheDocument();
    expect(getByText(/Godrej/)).toBeInTheDocument();
    if (rendered) rendered.unmount();
  });
});
