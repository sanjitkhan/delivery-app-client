import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import MenuBar from './MenuBar';
import { addAllProviders, mouseClick } from '../../utils/testUtils';
import App from '../../App';

describe('MenuBar', () => {
  it('renders menu properly', () => {
    const rendered: RenderResult = render(
      addAllProviders(<MenuBar />)
    );
    const { getByText } = rendered;
    expect(getByText(/Order/)).toBeInTheDocument(); // "Order" option
    expect(getByText(/Search/)).toBeInTheDocument(); // "Search" option
    expect(getByText(/Cart/)).toBeInTheDocument(); // "Cart" option
    expect(getByText(/Profile/)).toBeInTheDocument(); // "profile" option
    if (rendered) rendered.unmount();
  });
  it('routes to the correct page on clicking a menu button', () => {
    const rendered: RenderResult = render(
      addAllProviders(<App />)
    );
    const { getByText } = rendered;

    const OrderDivElement = getByText(/Page 1/);
    expect(OrderDivElement).toBeInTheDocument();
    
    const CartElement = getByText(/Cart/);
    mouseClick(CartElement);

    const CartDivElement = getByText(/Page 3/);
    expect(OrderDivElement).not.toBeInTheDocument();
    expect(CartDivElement).toBeInTheDocument();
  });
});
