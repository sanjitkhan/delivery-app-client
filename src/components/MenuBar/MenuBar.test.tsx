import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import MenuBar from './MenuBar';
import { addAllProviders, mouseClick } from '../../utils/testUtils';
import App from '../../App';

describe('MenuBar', () => {
  it('renders menu properly', () => {
    const rendered: RenderResult = render(
      addAllProviders({ component: <MenuBar /> })
    );
    const { getByText } = rendered;
    expect(getByText(/Collections/)).toBeInTheDocument(); // "Collections" option
    expect(getByText(/Products/)).toBeInTheDocument(); // "Products" option
    expect(getByText(/Order/)).toBeInTheDocument(); // "Order" option
    expect(getByText(/Profile/)).toBeInTheDocument(); // "Profile" option
    if (rendered) rendered.unmount();
  });
  it('routes to the correct page on clicking a menu button', () => {
    const rendered: RenderResult = render(
      addAllProviders({ component: <App /> })
    );
    const { getByText } = rendered;

    const ItemsScreenElement = getByText(/Categories/); // "categories" tab in items screen
    expect(ItemsScreenElement).toBeInTheDocument();
    
    const OrderElement = getByText(/Order/);
    mouseClick(OrderElement);

    const OrderScreenElement = getByText(/Page 3/);
    expect(ItemsScreenElement).not.toBeInTheDocument();
    expect(OrderScreenElement).toBeInTheDocument();
  });
});
