import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { addAllProviders } from '../../../utils/testUtils';
import BrandsTab from './BrandsTab';

describe('Brands tab', () => {
  it('renders the brands correctly', () => {
    const rendered: RenderResult = render(
      addAllProviders({component: <BrandsTab />, storeData: {
        brands: [
          {
            id: 'kwalitywalls',
            name: 'Kwality Walls',
            image: ''
          },
          {
            id: 'godrej',
            name: 'Godrej',
            image: ''
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
