import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { addAllProviders } from '../../utils/testUtils';
import BrandCard, { BrandCardProps } from './BrandCard';
const brandCardProps: Omit<BrandCardProps, 'location' | 'match' | 'history'> = {
  id: 'kwalitywalls',
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
});
