// import React from 'react';
// import { render, RenderResult } from '@testing-library/react';
// import Items from './Items';
// import { addAllProviders, mouseClick } from '../../utils/testUtils';
// import { Router } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
// import App from '../../App';

describe('Items page', () => {
  it('renders items page properly', () => {
    // const rendered: RenderResult = render(
    //   addAllProviders(<Items />)
    // );
    // const { getByText } = rendered;
    // expect(getByText(/Categories/)).toBeInTheDocument(); // "Categories" tab
    // expect(getByText(/Brands/)).toBeInTheDocument(); // "Brands" tab
    // expect(getByText(/Ice Cream/)).toBeInTheDocument(); // "Categories" tab data
    // if (rendered) rendered.unmount();
  });

  // TODO: Fix this test
  it('routes to the correct tab on clicking a tabMenu button', () => {
    // const history = createMemoryHistory();
    // history.push('/items/brands');
    // const rendered: RenderResult = render(
    //   <Router history={history} match={{}}>
    //     <Items />
    //   </Router>
    // );
    // const rendered: RenderResult = render(
    //   addAllProviders(<App />)
    // );
    // const { getByText } = rendered;
    // const CategoriesScreenElement = getByText(/Ice Cream/);
    // expect(CategoriesScreenElement).toBeInTheDocument(); // "Categories" tab data
    
    // const BrandsElement = getByText(/Brands/);
    // mouseClick(BrandsElement);
    // history.push('/items/brands');

    // const BrandsScreenElement = getByText(/Brands tab/);
    // expect(CategoriesScreenElement).not.toBeInTheDocument();
    // expect(BrandsScreenElement).toBeInTheDocument();
  });
});
