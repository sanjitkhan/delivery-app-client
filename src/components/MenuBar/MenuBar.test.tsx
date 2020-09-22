import React from 'react';
import { render } from '@testing-library/react';
import MenuBar from './MenuBar';
import { addAllProviders } from '../../utils/testUtils';

test('renders base app properly', () => {
  const { getByText } = render(
    addAllProviders(<MenuBar />)
  );
  expect(getByText(/Order/)).toBeInTheDocument(); // "Order" option
  expect(getByText(/Search/)).toBeInTheDocument(); // "Search" option
  expect(getByText(/Cart/)).toBeInTheDocument(); // "Cart" option
  expect(getByText(/Profile/)).toBeInTheDocument(); // "profile" option
});
