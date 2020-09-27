import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { addAllProviders } from '../../utils/testUtils';
import CategoryCard, { CategoryCardProps } from './CategoryCard';
import { TextPosition, BackgroundTheme } from '../../redux/categories/data';
import BrandCard, { BrandCardProps } from '../BrandCard/BrandCard';

const categoryCardProps: Omit<CategoryCardProps, 'location' | 'match' | 'history'> = {
  id: "icecream",
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
});
